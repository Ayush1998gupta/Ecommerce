const express = require('express');
const app  = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mongoose = require('mongoose');


//  use bodyparser to parse the form data
app.use(express.urlencoded({extended : false}));
app.use(express.json());

// Establize initial routes
app.use('/' , require('./routes/api/index'));


//database
mongoose
  .connect(
       `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.gexk8id.mongodb.net/Ecommerce?retryWrites=true&w=majority`
    
  )
  .then(() => console.log('database connected successfully'))
    .catch((err) => console.log('error connecting to mongodb', err));
  
// server listening
app.listen(PORT, () => {
  console.log(`The app start on http://localhost:${PORT}`);
});