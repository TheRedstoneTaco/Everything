var express = require("express");
var router  = express.Router();
var middleware = require("../middleware/index.js");

// ROOT route, render index page
router.get("/", function(req, res) {
    res.render("index.ejs");
});

module.exports = router;
