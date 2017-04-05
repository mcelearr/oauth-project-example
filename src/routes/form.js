module.exports = {
  method: 'GET',
  path: '/form',
  handler: (request, reply) => {
    reply.view('form', {
      total: 125
    });
  }
}
