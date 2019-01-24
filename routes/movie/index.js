const express = require('express');
const router = express.Router();
const db = require('../database/index');

router.get("/movie", (req, res) => {
    var sql = "SELECT * FROM movie";
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.render('movie/index', {results});
    });
})

router.post("/movie", (req, res) => {
    var { title, description, category, thumbnail } = req.body;
    var sql = "INSERT INTO movie (title, description, category, thumbnail) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, description, category, thumbnail], (error, results, fields) => {
        if (error) throw error;
        res.redirect("/movie");
    });
})

module.exports = router;