const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateSentence = require('./generateSentence')
const app = express()

const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const { body: { career }} = req
  const result = generateSentence(career)

  res.render('index', { result, [career]: true })
})

app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})