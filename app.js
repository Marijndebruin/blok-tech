// Express om de site op lokaal te hosten op localhost:3000 na node start
const express = require('express')
const app = express()
const port = 3000

// View engines ik heb gekozen voor EJS.
app.set('view engine', 'ejs');

// Welke pagina renderd hij als eerst, index.ejs
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/filter', (req, res) => {
  res.render('filter');
})

app.get('/resultaat', (req, res) => {
  res.render('resultaat');
})


// server starten...

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.use(express.static('public'))
