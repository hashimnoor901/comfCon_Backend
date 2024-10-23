const express = require('express')
const app = express()
const db = require('./db') // importing db.js file 
const User = require('./models/person')
const UserRoutes = require('./routes/userRoutes')
require('dotenv').config()
const PORT = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening at :${PORT}`);
});



app.use('/signup',UserRoutes)
