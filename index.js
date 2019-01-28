const express = require('express')
var bodyParser = require("body-parser")


const app = express(); 
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.set('view engine', 'ejs');
app.get('/',(req,res) =>{
    res.render("home")
})

app.post('/generate',(req,res) => {
    // res.send(req.body.nameone)
    // console.log(req.body)
    let name123 = req.body.name;
    const HummusRecipe = require('hummus-recipe');
    const pdfDoc = new HummusRecipe('Certificate.pdf', 'output.pdf');
    pdfDoc
        // edit 1st page
        .editPage(1)
        .text(name123, 415, 380)

        .endPage()
        // end and save
        .endPDF();
    res.send("PDF saved");

})


app.listen(5001,()=>{
    console.log("started")
})