# KITTY.IO

#### A CMS (content management system) app that keeps track of the kitty for the guest house.

Find us on [Heroku](#)

Or run locally:
1. ```git clone https://github.com/FACN1/week7-rm-rf-mario.git
npm```
2. ```cd week7-rm-rf-mario.git```
3. ```npm install```
4. ```npm run```

## User Stories


## File Structure
week7-rm-rf-mario
- public
  + index.js (event listeners)
  + style.css
- src
  + handlebars
    + helpers
      + helpers.js
  + layouts
    + default.hbs (basic skeleton: headers/footers/etc.)
  + partials
    + partial.hbs
  + views
    + index.hbs
  + routes
    + index.js
    + static.js
  + db_queries.js
  + server.js
  + start.js
- database
  + db_build.js (initialize database with db_build.sql)
  + db_build.sql (create database SQL syntax)
  + db_connection.js (database connection parameters)
- tests
  + back-end
    + tests.js
  + front-end
    + spec.html
    + tests.js

## App Logic
User Interface:
- Main: Go to the page and automatically render last 10 transactions, and total in the kitty.
- Add button: Takes you to a form to input money in the kitty.
- Withdraw: Takes you to a form to withdraw money.

Server:
- Routes:
  + '/list' request to server for recent transactions
  + '/update' directs to form view

Database:
- '/list' return recent transactions
- '/update' post transaction to the server, increase/decrease kitty

Table: current total, transaction value, name, id

Handlebars:

## Stretch Goals
- Validate with Joi
- Add users

## ToDo
#### Day 1
- [ ] Set up server (Jack/Hiba)
- [ ] Set up database (Mario/Lawson)
- [ ] Deploy to Heroku (Mario/Lawson)

#### Day 2


## Style Guide
