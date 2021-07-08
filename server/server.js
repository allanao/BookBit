require('dotenv').config(); // configure dotenv to load environment variables
const axios = require('axios');
const path = require('path'); 
const express = require('express'); 
const app = express();
const PORT = 3000;
// For handling CORS policy errors
let cors = require("cors");
app.use(cors());

// Require routers
const apiRouter = require('./routes/api');
const dbRouter = require('./routes/db');

// Adding ability to parse request body and form data

app.use(express.json());
app.use(express.urlencoded());

// Serve all static assets
app.use(express.static(path.resolve(__dirname, '../')));

// Route handler for all api requests
app.use('/api', apiRouter);
app.use('/db', dbRouter);

// route for when user clicks on "SIGN UP WITH GITHUB" button
app.get('/auth', (req, res) => {
  console.log('auth endpoint')
  res.status(301).redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});



app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}...`);
});