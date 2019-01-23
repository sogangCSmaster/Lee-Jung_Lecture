const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set("views", "./views");

app.get("/", (req, res) => {
    var name = req.query.name;
    res.render('main/main', { name });
})

app.get("/admin", function(req, res){
    res.send("this is admin page");
})

app.listen(3000, () => {
    console.log("server running");
})