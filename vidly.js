//Create web server
const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.json());
const home = require("./routes/home")

const  genres = require("./routes/genres")
app.use("/api/genres", genres);
app.use("/", home)


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

