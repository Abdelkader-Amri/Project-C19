const express = require("express");


var Converter = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/public"));



app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
