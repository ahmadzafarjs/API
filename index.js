require('dotenv').config();

const express = require('express');
const router = require("./routes/routes")
const mongoose = require('mongoose');
const mongoString = "mongodb+srv://Ahmad:ahmad336@test.bb05drz.mongodb.net/?retryWrites=true&w=majority/datas";

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})
const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use('/api', router)

app.get('/' , (req,res) => {
  res.send('Welcome to API created by Ahmad')
})

app.listen(port, () => {
  console.log(`Server Started at ${3000}`)
})
