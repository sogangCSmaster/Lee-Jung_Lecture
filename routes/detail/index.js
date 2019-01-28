const express = require('express');
const router = express.Router();
const db = require('../database/index');

router.route("/detail")
    .get((req, res) => {
        var id = req.query.id;
        var sql = "SELECT * FROM movie WHERE id=?";
        db.query(sql, [id], (err, movie, fields) => {
            if(err){
                return res.send("sorry error");
            }
            movie = movie[0];
            res.render('detail/index', {movie});
        })

    })

module.exports = router;