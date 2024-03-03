const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./userRoutes');

const app = express();
app.use(express.json()); // for parsing application/json
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
