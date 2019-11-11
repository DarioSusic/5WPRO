const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
