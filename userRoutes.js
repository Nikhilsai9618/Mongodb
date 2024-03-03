const express = require('express');
const router = express.Router();
const User = require('./userModel');

// Register a new user
router.post('/register', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Other routes like login, update, delete can be added here

module.exports = router;
