const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const mongoString = process.env.DATABASE_URL
const routes = require('./routes/routes');
mongoose.connect(mongoString);
const database = mongoose.connection

var cors = require('cors');
app.use(cors())


app.use(express.json());
app.use('/api', routes)

app.listen(8080, () => {
    console.log(`Server Started at ${8080}`)
})
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})




