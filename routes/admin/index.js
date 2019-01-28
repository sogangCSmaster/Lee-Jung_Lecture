const express = require('express');
const router = express.Router();
const db = require('../database/index');

router.get("/admin", (req, res) => {
    var sql = "SELECT * FROM movie";
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        res.render('admin/index', {results});
    });
})

router.post("/admin", (req, res) => {
    var { title, description, category, thumbnail } = req.body;
    var sql = "INSERT INTO movie (title, description, category, thumbnail) VALUES (?, ?, ?, ?)";
    db.query(sql, [title, description, category, thumbnail], (error, results, fields) => {
        if (error) throw error;
        res.redirect("/admin");
    });
})

router.delete("/admin", (req, res) => {
    // var { id } = req.body;
    var id = req.body.id;
    var sql = `DELETE FROM movie WHERE id=?`;
    db.query(sql, [id], (err, rows, fields) => {
        if(err){
            console.log(err);
        }
        res.redirect("/admin");
    });
})

module.exports = router;