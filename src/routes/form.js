const handler = (request, reply) => {
  const data = {
    title: 'Update',
    authenticated: false
  };

  if (request.auth.isAuthenticated) {
    data.authenticated = true;
    data.githubUsername = request.auth.credentials.user.username;
    data.githubImage = request.auth.credentials.user.img_url;
  }

  reply.view('form', data);
};

module.exports = {
  config: {
    auth: {
      mode: 'required',
      strategy: 'jwt'
    }
  },
  method: 'GET',
  path: '/form',
  handler
};
