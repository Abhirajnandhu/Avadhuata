const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes); 


mongoose.connect('mongodb://localhost:27017/expense-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

module.exports = app;
