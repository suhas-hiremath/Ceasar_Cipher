const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const DataModel = require('./models/data.js');
require('dotenv').config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors({origin: '*',}));
app.use(bodyParser.json());

// MongoDB connection string
const URI = process.env.MONGO_URI

// Connect to MongoDB
mongoose.connect(URI)
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Routes
app.post('/save-data', async (req, res) => {
  const { shift_value,plain_text,encrypted_text,decrypted_text } = req.body;
  try {
    const newData = new DataModel({
        shift_value,
        plain_text,
        encrypted_text,
        decrypted_text
    });
    await newData.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
