const faker = require('faker');
const { Order } = require('./models'); // Assuming your Order model is in '../models'

async function generateFakeOrders() {
  try {
    // Generate random orders for the first 100 users
    for (let userId = 1; userId <= 100; userId++) {
      const numOrders = faker.datatype.number({ min: 1, max: 5 }); // Random number of orders per user (1 to 5)

      for (let i = 0; i < numOrders; i++) {
        const productId = faker.datatype.number({ min: 1, max: 100 }); // Random product ID (1 to 100)

        // Create a fake order
        await Order.create({
          userId,
          productId,
          orderDate: faker.date.past(), // Random past date for the order
        });
      }
    }

    console.log('Fake orders generated successfully!');
  } catch (error) {
    console.error('Error generating fake orders:', error);
  }
}

generateFakeOrders();
