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

app.use(express.json());
app.use('/api', router)


app.listen(3000, () => {
  console.log(`Server Started at ${3000}`)
})