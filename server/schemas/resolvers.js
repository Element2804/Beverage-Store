const { AuthenticationError } = require('apollo-server-express');
const { User, Drink, Category, Order } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    // return all categories
    categories: async () => {
      return await Category.find();
    },
    // return all drinks
    drinks: async (parent, { category, name }) => {
      const params = {};

    // if category exists, set params.category to category
      if (category) {
        params.category = category;
      }
      // if name includes the name of the drink, return the drink
      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Drink.find(params).populate('category');
    },
    // returns a single drink by its id
    drinks: async (parent, { _id }) => {
      return await Drink.findById(_id).populate('category');
    },
    // return a single user by its id
    user: async (parent, args, context) => {
        // if user exists, return the user
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.drinks',
          populate: 'category'
        });

        // sort drinks in descending order by purchaseDate
        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    // get a single order by its id
    order: async (parent, { _id }, context) => {
        // if user exists, return the user
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.drinks',
          populate: 'category'
        });

        // return the orders
        return user.orders.id(_id);
      }

      throw new AuthenticationError('Not logged in');
    },
    // get checkout session
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      await new Order({ drinks: args.drinks });
      // eslint-disable-next-line camelcase
      const line_items = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const drink of args.drinks) {
        line_items.push({
          price_data: {
            currency: 'usd',
            drink_data: {
              name: drink.name,
              description: drink.description,
              images: [`${url}/images/${drink.image}`]
            },
            unit_amount: drink.price
          },
          quantity: drink.purchaseQuantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items,
        mode: 'payment',
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },
  Mutation: {
    // create a new user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    // add order to user
    addOrder: async (parent, { drinks }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ drinks });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    // update user info
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // update drink info
    updateDrink: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Drink.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
    },
    // login user
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;