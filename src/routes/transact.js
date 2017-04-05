module.exports = {
  method: 'POST',
  path: '/transact',
  handler: (request, reply) => {
    console.log(request.payload);
    reply.redirect('/');
  }
}
