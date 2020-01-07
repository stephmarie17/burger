const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hasDevouredBurgers = data.some(function(burger){
            return burger.devoured;
        });
        var hbsObject = {
            burgers: data,
            hasDevouredBurgers
        };
        console.log(hbsObject, hasDevouredBurgers);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insert(["burger_name", "devoured"], [req.body.burger_name, false], function (result) {
        res.json({id: result.id});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.update(
        id,
        function(result) {
            if (result.changedrows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

module.exports = router;