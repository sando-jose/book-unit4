//require("dotenv").config();
const express = require("express");
const app = express();
//const client = require("./db/client.cjs");
// const PORT = 3000;

app.use(express.static("dist"));

app.get("/", (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
