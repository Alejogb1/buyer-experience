const express = require("express")
const next = require("next")
const vhost = require("vhost")

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const mainServer = express()
  const companyServer = express()
  const memberServer = express()

  companyServer.get('/', (req, res) => {
    return app.render(req, res, '/subdomain/salesmeetings', req.query)
  })

  mainServer.use(vhost('salesmeetings.audiencia.co', companyServer))

  mainServer.listen(port, (err) => {
    if (err) throw err

    console.log(`> Ready on http://audiencia.co:${port}`)
  })
})