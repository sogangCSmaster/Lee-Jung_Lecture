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

module.exports = router;