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
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=user:email`
  )
});

// helper function for handling oauth callback endpoint
async function getGithubUser({ code }) {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}&code=${code}`
    )
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
  console.log('githubToken', githubToken)
  const decoded = JSON.stringify(githubToken);
  console.log('decoded', decoded);
  const accessToken = decoded.access_token;
  console.log('accessToken', accessToken)

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => {
      res.data
      console.log(res.data)
    })
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
}

app.get('/shelf', async (req, res) => {
  const code = get(req, 'query.code');
  const path = get(req, 'query.path', '/');

  if (!code) {
    throw new Error('No code!');
  }

  const githubUser = await getGithubUser({ code });

  const token = jwt.sign(githubUser, process.env.secret);
  console.log('token', token);

  res.cookie(process.env.COOKIE_NAME, token, {
    httpOnly: true,
    domain: "localhost",
  });

  res.redirect(`http://localhost:8080${path}`)
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