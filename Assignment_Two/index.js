// 1) npm init -y - initializes a new Node.js project and creates a package.json file with default values.
//
// 2) npm install express - installs the Express.js framework into Node.js project
//                          (routes, middleware, and other server-related configurations).
//
// 3) npm install nodemon --save - installs the nodemon utility into a Node.js project
//                                 and adds it to the list of dependencies a package.json file. 
//                                 Automatically restart a server during development
//                                 whenever changes are made to the code.
//
// 4) npm set-script start "nodemon index.js" - adds "start": "nodemon index.js" to package.json.
//                                              It is possible to do the same manually.
//
// 5) npm run start - starts a server with nodemon.
//
// 6) npm install ejs express-ejs-layouts


// Adds Express.js library to the application.
const express = require('express');
// Import the 'express-ejs-layouts' module
const ejsLayouts = require('express-ejs-layouts');


// Initialize a new instance of an Express application.
const app = express();
// Define a port
const PORT = 8080;
// Start the Express server
app.listen(PORT, () =>
    console.log(`Listening to port localhost:${PORT}`)
);


// Set EJS as the view engine
app.set('view engine', 'ejs');
// Use express-ejs-layouts
app.use(ejsLayouts);
// Middleware from Express for parsing POST request
app.use(express.urlencoded({ extended: true }));


// Hardcoded credentials
const ADMIN = {
    username: 'admin',
    password: '123'
};
// Fake users
const users = require("./data/fakeUsers.json");

////////////
// ROUTES //
////////////

app.get('/', (req, res) => {
    res.render('login', { title: 'Login Page' });
});

app.post('/', (req, res) => {    
    if (req.body.username === ADMIN.username && req.body.password === ADMIN.password) {
        res.redirect('/list');
    } else {
        res.redirect('/alert');
    }
});

app.get('/list', (req, res) => {
    res.render('list', { title: 'List', users });
});

app.get('/alert', (req, res) => {
    res.render('alert', { title: 'Alert' });
});

app.get('/details/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);    
    res.render('details', { user: user, title: 'User Details' });    
});
