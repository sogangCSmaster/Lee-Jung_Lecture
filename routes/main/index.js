const express = require('express');
const router = express.Router();
const db = require('../database/index');

router.route("/")
    .get((req, res) => {
        var sql = "SELECT * FROM movie";
        db.query(sql, (err, movies, fields) => {
            if(err){
                console.log(err);
                return res.end();
            }
            
            res.render('main/main', { movies });

        })
    })
    .post((req, res) => {
        var search = req.body.search;
        search = "%" + search + "%";
        var sql = "SELECT * FROM movie WHERE title LIKE ? OR description LIKE ?";
        db.query(sql, [search, search], (err, movies, fields) => {
            if(err){
                console.log(err);
                return res.send("sorry error~");
            }

            res.render('main/main', { movies });
        })
    })

module.exports = router;