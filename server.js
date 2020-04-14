const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect("mongodb://ElizaFx1:ElizaFx1@ds251902.mlab.com:51902/crud",{ useNewUrlParser: true },
(err, client) => {
  if (err) return console.log(err)
  db = client.db('crud')

  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.set('view engine', 'ejs')
//res.render(view, locals)

app.get('/', (req, res) => {
  db.collection('crud').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {crud: result})
  })
})

app.post('/quotes', (req, res) => {
  db.collection('crud').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
	})
})