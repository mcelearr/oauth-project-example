# KITTY.IO

#### A CMS (content management system) app that keeps track of the kitty for the guest house.

Find us on [Heroku](https://kittyio.herokuapp.com/)

Or run locally:
```bash
git clone https://github.com/FACN1/week7-rm-rf-mario.git
cd week7-rm-rf-mario.git
npm install
npm start
```

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
- Transaction: Takes you to a form to input or withdraw money in the kitty.

Server:
- Routes:

Handlebars:

## Database Schema

| ID  | DATE | NAME | TRANSACTION_VALUE |
| ------------- | ------------- | ------------- | ------------- |
| SERIAL PRIMARY KEY | DATE DEFAULT CURRENT_DATE  |  VARCHAR(200) NOT NULL  |  INT NOT NULL

## Stretch Goals
- Validate with Joi
- Add users

## ToDo
#### Day 1
- [x] Set up server (Jack/Hiba)
- [x] Set up database (Mario/Lawson)
- [x] Deploy to Heroku (Mario/Lawson)

#### Day 2
- [x] set up handlebars
- [x] populate layouts/header.hbs
- [ ] set up home route
- [ ] set up form route
- [ ] add a header partial


## Style Guide
