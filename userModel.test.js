const mongoose = require('mongoose');
const User = require('./userModel');

// Connect to a MongoDB test database
beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true, useUnifiedTopology: true });
});

// Disconnect after tests
afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Model Test', () => {
    // Test for creating a new user
    it('create & save user successfully', async () => {
        const userData = { username: 'testuser', email: 'test@example.com', password: '123456' };
        const validUser = new User(userData);
        const savedUser = await validUser.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.username).toBe(userData.username);
        expect(savedUser.email).toBe(userData.email);
    });

    // Other tests like validation tests can be added here
});
