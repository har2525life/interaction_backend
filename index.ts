import express from "express";

const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.status(200).send({
    message: "hello world",
  });
});

app.listen(port)
console.log('listen on port ' + port)