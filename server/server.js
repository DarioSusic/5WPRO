const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 4000;

// Define Routes
app.use('/', express.static('../client/build'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/products', require('./routes/api/products'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
