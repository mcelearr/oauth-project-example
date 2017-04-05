module.exports = {
  method: 'GET',
  path: '/form',
  handler: (request, reply) => {
    reply.view('form', {
      title: 'ADD / WITHDRAW'
    });
  }
}
