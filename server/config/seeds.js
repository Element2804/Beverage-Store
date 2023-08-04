const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Juice Can" },
    { name: "Coconut Milk" },
    { name: "Coconut Water" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "De Mi Pais Mango Juice 16.9 OZ/ 24",
      description: "Mango Juice Drink with Pulp.",
      image: "./images/MangoJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Soursop Juice 16.9 OZ/ 24",
      description: "Soursop Juice Drink with Pulp.",
      image: "./images/SoursopJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Guava Juice 16.9 OZ/ 24",
      description: "Guava Juice Drink with Pulp.",
      image: "./images/GuavaJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Watermelon Juice 16.9 OZ/ 24",
      description: "Watermelon Juice Drink with Pulp.",
      image: "./images/WatermelonJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Tamarind Juice 16.9 OZ/ 24",
      description: "Tamarind Juice Drink with Pulp.",
      image: "./images/TamarindJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Strawberry Juice 16.9 OZ/ 24",
      description: "Strawberry Juice Drink with Pulp.",
      image: "./images/StrawberryJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Orange Carrot Juice 16.9 OZ/ 24",
      description: "Orange Carrot Juice Drink with Pulp.",
      image: "./images/OrangeJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Cantaloupe Pineapple Juice 16.9 OZ/ 24",
      description: "Cantaloupe Pineapple Juice Drink with Pulp.",
      image: "./images/CantaloupeJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Mamey Juice 16.9 OZ/ 24",
      description: "Mamey Juice Drink with Pulp.",
      image: "./images/MameyJuice.jpg",
      category: categories[0]._id,
      price: 32.4,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Original 16.9 OZ/ 24",
      description: "Original Coconut Milk Drink with Pulp.",
      image: "./images/OriginalMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Mango 16.9 OZ/ 24",
      description: "Mango Flavored Coconut Milk Drink with Pulp.",
      image: "./images/MangoMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Strawberry 16.9 OZ/ 24",
      description: "Strawberry Flavored Coconut Milk Drink with Pulp.",
      image: "./images/StrawberryMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Pina Colada 16.9 OZ/ 24",
      description: "Pina Colada Flavored Coconut Milk Drink with Pulp.",
      image: "./images/PinaMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Banana 16.9 OZ/ 24",
      description: "Banana Flavored Coconut Milk Drink with Pulp.",
      image: "./images/BananaMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Cocoa 16.9 OZ/ 24",
      description: "Cocoa Flavored Coconut Milk Drink with Pulp.",
      image: "./images/CocoaMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Soursop 16.9 OZ/ 24",
      description: "Soursop Flavored Coconut Milk Drink with Pulp.",
      image: "./images/SoursopMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Milk Coffee 16.9 OZ/ 24",
      description: "Coffee Flavored Coconut Milk Drink with Pulp.",
      image: "./images/CoffeeMilk.jpg",
      category: categories[1]._id,
      price: 26.28,
      quantity: 500,
    },
    {
      name: "De Mi Pais Coconut Water 16.9 OZ/ 24",
      description: "Coconut Water Drink with Pulp.",
      image: "./images/DeMiPaisWater.jpg",
      category: categories[2]._id,
      price: 38.16,
      quantity: 500,
    },
    {
      name: "Iberia Coconut Water with Pulp 16.9 OZ/ 24",
      description: "Coconut Water Drink with Pulp.",
      image: "./images/IberiaWater.jpg",
      category: categories[2]._id,
      price: 38.16,
      quantity: 500,
    },
  ]);

  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Pamela",
    lastName: "Washington",
    email: "pamela@testmail.com",
    password: "password12345",
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id],
      },
    ],
  });

  await User.create({
    firstName: "Elijah",
    lastName: "Holt",
    email: "eholt@testmail.com",
    password: "password12345",
  });

  console.log("users seeded");

  process.exit();
});
