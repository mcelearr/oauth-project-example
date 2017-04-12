const request = require('request');
const jwt = require('jsonwebtoken');

const handler = (req, reply) => {
  const data = {
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    code: req.query.code
  };
  const options = {
    method: 'POST',
    body: data,
    json: true,
    url: 'https://github.com/login/oauth/access_token'
  };
  request(options, (error, response, body) => {
    if (error) {
      return reply(error);
    }
    if (!body.access_token) {
      return reply('something went wrong.');
    }
    const headers = {
      'User-Agent': 'oauth_github_jwt',
      Authorization: `token ${body.access_token}`
    };
    const url = 'https://api.github.com/user';

    return request.get({
      url,
      headers
    }, (githubPostErr, githubPostres, githubPostbody) => {
      if (githubPostErr) {
        console.log(githubPostErr);
      }
      const parsedBody = JSON.parse(githubPostbody);
      const payload = {
        user: {
          username: parsedBody.login,
          img_url: parsedBody.avatar_url,
          user_id: parsedBody.id
        },
        accessToken: parsedBody.access_token
      };
      const JWToptions = {
        expiresIn: Date.now() + (10 * 1000),
        subject: 'github-data'
      };
      const secret = process.env.SECRET;
      jwt.sign(payload, secret, JWToptions, (JWTerr, token) => {
        reply
        .redirect('/authenticated') // make a new route for the redirect, config it with an authentication strategy
        .state('token', token,
          {
            path: '/',  // the token is valid for every path starting with /
            isHttpOnly: false,
            isSecure: process.env.NODE_ENV === 'PRODUCTION'
          });
      });
    });
  });
};

module.exports = {
  method: 'GET',
  path: '/auth',
  handler
};
