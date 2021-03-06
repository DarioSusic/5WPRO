const express = require('express');
const connectDB = require('./config/db');

const app = express();
const path = require('path');

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 4000;

// Define Routes
app.use('/', express.static('../client/build'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/products', require('./routes/api/products'));

// Serve static assets in production
//if (process.env.NODE_ENV === 'production') {
// Set static folder

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../client/build/')
  });
});
//}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
