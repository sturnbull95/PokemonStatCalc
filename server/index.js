var express = require("express");
var bodyParser = require("body-parser");
const db = require("../database/index.js");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const morgan = require("morgan");

var app = express();
const port = 3000;
const path = require("path");

// UNCOMMENT FOR REACT
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/pok", function(req, res) {
  console.log(req.params, "appapapsdfsd");
  console.log(req.query);
  var temp = req.query;
  db.Pokemon.find({ name: new RegExp("^" + req.query.name, "i") }, function(
    err,
    data
  ) {
    res.send(data);
  }).limit(7);
});
app.get("/find", function(req, res) {
  console.log(req.params, req.query);
  db.Pokemon.find({ name: req.query.name }, function(err, data) {
    res.send(data);
  });
});

app.listen(port, function() {
  console.log("listening on port 3000!");
});
