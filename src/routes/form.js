const handler = (request, reply) => {
  reply.view('form', {
    title: 'Update'
  });
};

module.exports = {
  config: { auth: 'jwt' },
  method: 'GET',
  path: '/form',
  handler
};
