// Express om de site op lokaal te hosten op localhost:3000 na node start
const express = require('express')
const app = express()
const port = 3000

// dotenv hieroor maak je een .env bestand en sla hier je gegevens voor de database in op.
const dotenv = require('dotenv').config()
console.log(process.env) // remove this after you've confirmed it working

// Database dingen
const {
  MongoClient
} = require('mongodb');
const {
  ObjectId
} = require('mongodb');

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
  connectDB().then(() => console.log("We have a connection to Mongo!"));

})

app.use(express.static('public'))


// Database
// connect
async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
  });
  try {
      await client.connect();
      db = client.db(process.env.DB_NAME);
  } catch (error) {
      throw error;
  }
}

app.get('/', async (req, res) => {

  const ress = await fetch('https://dog.ceo/api/breeds/image/random');
  const dogImage = await ress.json();
  eenfoto (data.message);
});