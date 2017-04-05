const handler = (request, reply) => {
  let data  = {
    title: 'Kitty I/O'
  }
  reply.view('home', data)
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
