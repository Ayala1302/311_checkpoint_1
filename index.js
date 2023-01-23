const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

// import and use the `bodyParser` in order to ensure that the body from our POST requests is appropriately cast to JSON.
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})