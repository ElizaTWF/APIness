require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { doubleCsrf } = require('csrf-csrf')
const rateLimit = require('express-rate-limit')
const basicAuth = require('express-basic-auth')
const { MongoClient, ObjectId } = require('mongodb')

const { generateToken, doubleCsrfProtection } = doubleCsrf({
  getSecret: () => process.env.CSRF_SECRET,
  cookieName: '_csrf',
  cookieOptions: { sameSite: 'strict', secure: process.env.NODE_ENV === 'production' },
})

var db

MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true },
(err, client) => {
  if (err) return console.log(err)
  db = client.db(process.env.DB_NAME)

  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  db.collection(process.env.COLLECTION_NAME).find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', { crud: result, csrfToken: generateToken(req, res) })
  })
})

const auth = basicAuth({
  users: { [process.env.APP_USER]: process.env.APP_PASSWORD },
  challenge: true,
})

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 20,
  message: 'Too many submissions, please try again later.',
})

app.post('/quotes', auth, submitLimiter, doubleCsrfProtection, (req, res) => {
  const name = typeof req.body.name === 'string' ? req.body.name.trim() : ''
  const quote = typeof req.body.quote === 'string' ? req.body.quote.trim() : ''

  if (!name || !quote) {
    return res.status(400).send('Name and quote are required.')
  }

  db.collection(process.env.COLLECTION_NAME).save({ name, quote }, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

app.put('/quotes', (req, res) => {
 db.collection(process.env.COLLECTION_NAME)
 .findOneAndUpdate({_id: new ObjectId(req.body.id)}, {
   $set: {
     name: req.body.name,
     quote: req.body.quote
   }
 }, {
   sort: {_id: -1},
   upsert: true
 }, (err, _result) => {
   if (err) return res.send(err)
   res.send('updated')
 })
})