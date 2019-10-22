const express = require('express')
const app = express()
const port = 15943

app.get('/', (req, res) =>
  res.send('Greetings from karn...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
