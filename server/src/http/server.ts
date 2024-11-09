import fastify from 'fastify'

const app = fastify()

app.get('', (request, response) => {})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running!')
  })
