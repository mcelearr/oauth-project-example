const handler = (request, reply) => {
  reply.redirect('/');
};

module.exports = {
  method: 'GET',
  path: '/authenticated',
  handler
};
