const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
var app = express()
// var cookieParser = require('cookie-parser');
// app.use(cookieParser())
// var bodyParser = require('body-parser');

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// app.use(express.static("served"))
app.use("/script",express.static("script")) 

app.use("/css",express.static("css")) 


app.get("/write", function(req, res){
    res.render("entry1", { title: "H1" , entry: "1234" , categories: ["AA", "BB" ]  , button_text: "Speichern"  })
})



app.listen(port, function(){
    console.log(`http://localhost:${port}/write         `)
})
