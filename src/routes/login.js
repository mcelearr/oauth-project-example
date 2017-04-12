const querystring = require('querystring');

const handler = (loginRequest, reply) => {
  const queries = querystring.stringify({
    client_id: process.env.CLIENT_ID,
    redirect_uri: 'https://localhost:9000/auth'
  });
  reply.redirect(`https://github.com/login/oauth/authorize?${queries}`);
};

module.exports = {
  method: 'GET',
  path: '/login',
  handler
};
