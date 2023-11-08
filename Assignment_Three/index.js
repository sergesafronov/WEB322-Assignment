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

// Set EJS as the view engine
app.set('view engine', 'ejs');
// Use express-ejs-layouts
app.use(ejsLayouts);
// Middleware from Express for parsing POST request
app.use(express.urlencoded({ extended: true }));
// To parse JSON bodies
app.use(express.json()); 

// Import the route modules
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const apiRouter = require('./routes/apiRouter');

// Use the route modules
app.use('/', authRoutes);
app.use(userRoutes);
app.use('/api', apiRouter); 

// Start the Express server
app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
);
