const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const date = require(__dirname + "/date.js")
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.static("public"));

var items = ["College","Sleep","Coding"];
var workitems = [];

app.get("/", (req, res) => {
    var day = date();
    res.render("list.ejs", { lday: day , newList:items});
});

app.post("/",(req,res)=>{
    input = req.body.input
    items.push(input);
    res.redirect("/");
})


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
