// 1) npm init -y - initializes a new Node.js project and creates a package.json file with default values.
//
// 2) npm install express - installs the Express.js framework into Node.js project
//                          (routes, middleware, and other server-related configurations).
//
// 3) npm install ejs express-ejs-layouts - This installs ejs (a template engine)
//                                          and express-ejs-layouts (a layout manager
//                                          for EJS within Express applications).
//
// 4) npm install nodemon --save - installs the nodemon utility into a Node.js project
//                                 and adds it to the list of dependencies a package.json file. 
//                                 Automatically restart a server during development
//                                 whenever changes are made to the code.
//
// 5) Open the package.json file - Add a start script under the scripts section: 
//                                 "scripts": {
//                                     "start": "nodemon server.js",
//                                     // other scripts can go here
//                                 }
//
// 6) npm install sequelize - Initialize Sequelize.
// 7) install pg pg-hstore
//
// 8) npm run start - starts a server with nodemon.

// server.js

const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const { sequelize, User, Product, Order } = require('./models');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

const authRoutes = require('./routes/authRoutes');
const alertRoutes = require('./routes/alert');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/', authRoutes);
app.use(alertRoutes);
app.use(userRoutes);
app.use('/api/', userRoutes);
app.use('/api/', productRoutes);
app.use('/api/', orderRoutes);

// Model associations
User.associate({ User, Product, Order });
Product.associate({ User, Product, Order });
Order.associate({ User, Product, Order });


sequelize.authenticate()
  .then(() => {
    console.log('\nConnection to the database successful.\n');
    return sequelize.sync(); 
  })
  .then(() => {
    console.log('\nDatabase synchronized.\n');
   
    app.listen(PORT, () =>
      console.log(`Server is running on http://localhost:${PORT}\n`)
    );
  })
  .catch((err) => {
    console.error(`\nConnection to the database failed: ${err}\n`);
});