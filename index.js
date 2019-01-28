const express = require('express')
 

const app = express(); 
app.set("views", "./views");

app.set('view engine', 'ejs');
app.get('/',(req,res) =>{

    res.render("home")

    // const HummusRecipe = require('hummus-recipe');
    // const pdfDoc = new HummusRecipe('Certificate.pdf', 'output.pdf');
    // pdfDoc
    //     // edit 1st page
    //     .editPage(1)
    //     .text('Ketan Gondaliya', 500, 400)

    //     .endPage()
    //     // end and save
    //     .endPDF();
    //     res.send("PDF saved");
})

app.post('/generate',(req,res) => {
    // res.send(req.body.nameone)
    console.log(req.body)
    console.log(req.body.nameone)
})


app.listen(5001,()=>{
    console.log("started")
})