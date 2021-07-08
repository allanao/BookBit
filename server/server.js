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

// for handling cors
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

// route for when user clicks on "SIGN UP WITH GITHUB" button
app.get('/auth', (req, res) => {
  console.log('auth endpoint')
  res.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

app.get('/oauth-callback', ({ query: { code } }, res) => {
  const body = {
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_SECRET,
    code,
  };
  const opts = { headers: { accept: 'application/json' } };
  axios
    .post('https://github.com/login/oauth/access_token', body, opts)
    .then((_res) => _res.data.access_token)
    .then((token) => {
      // eslint-disable-next-line no-console
      console.log('My token:', token);

      res.redirect(`/?token=${token}`);
    })
    .catch((err) => res.status(500).json({ err: err.message }));
});

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});


// route error handler is unknown
app.use((req, res) =>
	res.status(404).send("This is not the page you're looking for...")
);

// global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 400,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign(defaultErr, err);
	console.log(errorObj.log);
	res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`The server is listening on ${PORT}...`);
});