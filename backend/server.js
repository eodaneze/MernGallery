const express = require('express');
const cors = require("cors");
const upload = require('./routes/uploadRoute');
const connectDB = require('./config/db');
require('./config/db')
require('dotenv').config();
connectDB()

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', upload)

app.get('/', (req, res) => {
     res.send("Hello from node api");
     console.log("API IS RUNNING");
})
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
     console.log(`server is running on port ${PORT}`);
})

// MQZPpiOPSqKBv80u