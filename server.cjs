require("dotenv").config();
const client = require("./db/client.cjs");
const axios = require("axios");
const app = express();
const express = require("express");
// const PORT = 3000;

app.use(express.json());

client.connect();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
