const port = 8080
const express = require('express')
const handlebars = require('express-handlebars')
const path = require('path')
var app = express()

app.engine('handlebars', handlebars())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))

// app.use(express.static("served"))
app.use("/js",express.static("js"))

app.use("/jquery-handlebars",express.static("jquery-handlebars"))

app.use("/css",express.static("css"))

app.get("/basic_index.html", function(req, res){
    res.sendFile("basic_index.html", {root: path.join(__dirname, '.')})
    // console.log(path.join(__dirname, '.'))
})

app.get("/ajax_getsomething", function(req, res){

    // res.send("hi")

    res.send({   friend: "Oliver", age:40          })

})



app.get("/write", function(req, res){
    res.render("entry1", { title: "H1" , entry: "1234" , categories: ["AA", "BB" ]  , button_text: "Speichern"  })
})



app.listen(port, function(){
    console.log(`http://localhost:${port}/write         `)
})


/*

Es gibt 4 Wege Content zu generieren und zu senden:

1. literal String   ...   res.send("___")

2. literal Objects  ...   res.send({____})

3. gerenderter String  ... res.render(____)

4. selfmade JS-Function-Rendering, on-the-fly oder in großem Stil


*/
