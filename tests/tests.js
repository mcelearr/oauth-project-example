const server = require('../src/server.js');
const tape = require('tape');
const jwt = require('jsonwebtoken');

const mockPayload = {
  user: {
    username: 'mcelearr',
    img_url: 'myImageUrl',
    user_id: 'myUserId'
  },
  accessToken: 'myAccessToken'
};
const mockJWToptions = {
  expiresIn: Date.now() + (10 * 1000),
  subject: 'github-data'
};
const realSecret = process.env.SECRET;

tape('check the home route', (t) => {
  const options = {
    url: '/',
    method: 'GET'
  };
  server.inject(options, (res) => {
    const testString = '<title>Kitty I/O</title>';
    t.equal(res.statusCode, 200, 'status code should be 200');
    t.ok(res.payload.includes(testString), 'served html should contain the right title');
    t.end();
  });
});

tape('check the form route WITHOUT authentication', (t) => {
  const options = {
    url: '/form',
    method: 'GET'
  };
  server.inject(options, (res) => {
    t.equal(res.statusCode, 401, 'status code should be 401 when unauthenticated');
    t.end();
  });
});

tape('check the form route with an invalid token', (t) => {
  const token = jwt.sign(mockPayload, 'myFakeSecret', mockJWToptions);

  const options = {
    url: '/form',
    method: 'GET',
    headers: { authorization: token }
  };

  server.inject(options, (res) => {
    t.equal(res.statusCode, 401, 'status code should be 401 with an invalid JWT');
    t.end();
  });
});

tape('check the form route with valid token', (t) => {
  const token = jwt.sign(mockPayload, realSecret, mockJWToptions);

  const options = {
    url: '/form',
    method: 'GET',
    headers: { authorization: token }
  };

  server.inject(options, (res) => {
    t.equal(res.statusCode, 200, 'status code should be 200 with valid JWT');
    t.end();
  });
});

tape.onFinish(() => process.exit(0));
