# KITTY.IO

#### A CMS (content management system) app that keeps track of the kitty for the guest house.

Find us on [Heroku](https://kittyio.herokuapp.com/)...

...or run locally:
```bash
git clone https://github.com/FACN1/week7-rm-rf-mario.git
cd week7-rm-rf-mario
npm install
npm start
```

## User Stories
**As an honest resident of the guesthouse**
> I want to be able to record my contributions to the kitty

> So that I can maintain the respect of my peers

## File Structure
week7-rm-rf-mario
- public/
  + style.css
- src/
  + handlebars/
    + helpers/
    + layouts/
    + partials/
    + views/
  + routes/
  + db_queries.js
  + server.js
  + start.js
- database/
  + db_build.js (initialize database with db_build.sql)
  + db_build.sql (create database SQL syntax)
  + db_connection.js (database connection parameters)
- tests/
  + back-end/
    + tests.js

## App Logic
- User Interface:
  - Main: go to the page and automatically render the last `n` transactions, and the total in the kitty
  - Update: takes you to a form to add to or withdraw money from the kitty

## Database Schema

| ID  | DATE | NAME | TRANSACTION_VALUE |
| ------------- | ------------- | ------------- | ------------- |
| SERIAL PRIMARY KEY | DATE DEFAULT CURRENT_DATE  |  VARCHAR(200) NOT NULL  |  INT NOT NULL

## Stretch Goals
- Add users

## ToDo
#### Day 1
- [x] Set up server (Jack/Hiba)
- [x] Set up database (Mario/Lawson)
- [x] Deploy to Heroku (Mario/Lawson)

#### Day 2
- [x] set up handlebars
- [x] populate layouts/header.hbs
- [x] set up home route
- [x] set up form route
- [x] add a header partial

## Style Guide
- ES6 on the back-end
- 2-space indentation
