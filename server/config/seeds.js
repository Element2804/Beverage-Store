const db = require('./connection');
const { User, Drink, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Juice Can' },
    { name: 'Coconut Milk' },
    { name: 'Coconut Water' }
  ]);

  console.log('categories seeded');

  await Drink.deleteMany();

  const drinks = await Drink.insertMany([
    {
      name: 'De Mi Pais Mango Juice 16.9 OZ/ 24',
      description:
        'Mango Juice Drink with Pulp.',
      category: categories[0]._id,
      price: 32.40,
      quantity: 500
    },
    {
        name: 'De Mi Pais Soursop Juice 16.9 OZ/ 24',
        description:
          'Soursop Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Pineapple Juice 16.9 OZ/ 24',
        description:
          'Pineapple Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Guava Juice 16.9 OZ/ 24',
        description:
          'Guava Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Passion Fruit Juice 16.9 OZ/ 24',
        description:
          'Passion Fruit Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Tamarind Juice 16.9 OZ/ 24',
        description:
          'Tamarind Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Strawberry Juice 16.9 OZ/ 24',
        description:
          'Strawberry Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Orange Carrot Juice 16.9 OZ/ 24',
        description:
          'Orange Carrot Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Cantaloupe Pineapple Juice 16.9 OZ/ 24',
        description:
          'Cantaloupe Pineapple Juice Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[0]._id,
        price: 32.40,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Original 16.9 OZ/ 24',
        description:
          'Original Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Mango 16.9 OZ/ 24',
        description:
          'Mango Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Strawberry 16.9 OZ/ 24',
        description:
          'Strawberry Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Pina Colada 16.9 OZ/ 24',
        description:
          'Pina Colada Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Banana 16.9 OZ/ 24',
        description:
          'Banana Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Milk Cocoa 16.9 OZ/ 24',
        description:
          'Cocoa Coconut Milk Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[1]._id,
        price: 26.28,
        quantity: 500
    },
    {
        name: 'De Mi Pais Coconut Water 16.9 OZ/ 24',
        description:
          'Coconut Water Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
        price: 38.16,
        quantity: 500
    },
    {
        name: 'Iberia Coconut Water with Pulp 16.9 OZ/ 24',
        description:
          'Coconut Water Drink with Pulp.',
        image: 'cookie-tin.jpg',
        category: categories[2]._id,
        price: 38.16,
        quantity: 500
    }
  ]);
    



  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        drinks: [drinks[0]._id, drinks[0]._id, drinks[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
