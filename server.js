const express = require("express");
const port = process.env.PORT || 3001
const cors = require("cors");
const fs = require('fs');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({ extended: true }));

// /?q=xfhfdjksl
app.post("/", cors({ origin: true }), function (req, res) {
  // const {html} = req.body;
  console.log(req.body);
  return res.json('xd');
});

// /?q=xfhfdjksl
app.get("/", cors({ origin: true }), function (req, res) {

  console.log('get');
  return res.json('xd');
});

app.listen(port);
