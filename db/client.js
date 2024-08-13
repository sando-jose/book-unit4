const { Client } = require("pg");
const client = new Client(
  process.env.DATABSE_URL || "postgres://localhost:5432/db"
);

client.connect();
console.log("Connected!");
