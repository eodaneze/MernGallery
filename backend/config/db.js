const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const url = process.env.MONGO_URL;

mongoose.connect(url)
.then(() => {
  console.log("Connection was successful");
}).catch(err => console.log('error connecting to db'))