const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');


app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.set("views", "./views");



app.get("/", (req, res) => {
    var name = req.query.name;
    res.render('main/main', { name });
})

app.get("/testapi", async(req, res) => {
    var data = await axios.get("https://api.iextrading.com/1.0/stock/aapl/book");
    console.log(data);
    res.send(data.data);
})



app.post("/", (req, res) => {
    console.log(req.body);
    var { email, password } = req.body;
    var email = req.body.email;
    var password = req.body.password;

    res.render('main/main', {name: email});
})

app.get("/admin", function(req, res){
    res.send("this is admin page");
})


const movie = require('./routes/movie/index');
app.use(movie);



app.listen(3000, () => {
    console.log("server running");
})