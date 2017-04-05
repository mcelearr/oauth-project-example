const handler = (request, reply) => {
  let data  = {
    title: 'KITTY I/O'
  }
  reply.view('home', data)
}

module.exports = {
  method: 'GET',
  path: '/',
  handler: handler
}
