const staticRoute = require('./static.js');
const formRoute = require('./form.js');
const transactRoute = require('./transact.js');
const homeRoute = require('./home.js');
const loginRoute = require('./login.js');
const authRoute = require('./auth.js');
const authenticatedRoute = require('./authenticated.js');

module.exports = [
  staticRoute,
  formRoute,
  transactRoute,
  homeRoute,
  loginRoute,
  authRoute,
  authenticatedRoute
];
