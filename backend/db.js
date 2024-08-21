const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.error("DB Error",error);
    process.exit(1);
  }
}
module.exports = connectDB;