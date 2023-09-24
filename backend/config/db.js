const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGO_URL;

const connectDB = async() => {
  try {
      const conn = await mongoose.connect(url)
      console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1)
  }
}
module.exports = connectDB;