const express = require('express')
var bodyParser = require('body-parser')
const HummusRecipe = require('hummus-recipe')
const fs = require('fs')
const path = require('path')

// create a stdout and file logger
const log = require('simple-node-logger').createSimpleLogger('project.log');

const app = express()
app.set('views', './views')

//used for applying css to ejs file
app.use('/public', express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('home')
})

app.post('/generate', (req, res) => {
  // res.send(req.body.nameone)
  // console.log(req.body)
  let name123 = req.body.name

  //logging name to project.log file
  log.info('name is ', name123, "  ", new Date().toJSON())

  const pdfDoc = new HummusRecipe('Certificate.pdf', 'output.pdf')
  pdfDoc
    // edit 1st page
    .editPage(1)
    .text(name123, 1010, 1000, {
      color: '#0F045C',
      fontSize: 70,
      bold: true,
      font: 'Helvatica',


    })

    .endPage()
    // end and save
    .endPDF()
  var data = fs.readFileSync('./output.pdf')
  res.contentType('application/pdf')
  res.send(data)
  // res.send("PDF saved");
})

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('started')
})