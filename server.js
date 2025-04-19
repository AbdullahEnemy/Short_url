const express =require("express")
const mongoose = require('mongoose');
const urlRoutes = require('./routes/urlRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use('/', urlRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);

  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});