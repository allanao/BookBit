require('dotenv').config(); // configure dotenv to load environment variables
const axios = require('axios');
const path = require('path'); 
const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


// route for when user clicks on "SIGN UP WITH GITHUB" button
app.get('/auth', (req, res) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`,
  );
});


app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}`);
});