const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.get("/form", (req, res) => {
  console.log(req.query);
  return res.status(200).send("reçu");
});

app.listen(90, () => {
  console.log("connecté");
});
