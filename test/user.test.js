import mongoose from 'mongoose';
import request from 'supertest';
import {app} from '../server.js';
import {user} from '../schema.js';

beforeAll(async () => {
  // Connect to MongoDB Atlas using test database URI
  await mongoose.connect("mongodb+srv://aadi:Adarsh1442005@cluster0.nc0yl.mongodb.net/CICDChecking"
  );

  // Clear and seed predictable test data
  await user.deleteMany({});
  await user.create({ name: "Adarsh", age: 22 });
});

afterAll(async () => {
  // Disconnect after tests
  await mongoose.disconnect();
});

test('GET /users fetches data from MongoDB Atlas', async () => {
  const res = await request(app).get('/users');
  expect(res.status).toBe(200);                // API responds successfully
  expect(Array.isArray(res.body)).toBe(true); // Response is an array
  expect(res.body[0].name).toBe("Adarsh");    // First user matches seeded data
});