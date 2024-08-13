const client = require("./client.js");

const createTables = async () => {
  try {
    await client.query(`
      CREATE TABLES vinyls (
        id SERIAL PRIMARY KEY,
        name VARCHAR(40),
        year INTEGER
      )
      `);
  } catch (err) {
    console.log(err);
  }
};

const syncAndSeed = async () => {
  await client.connect();
  console.log("CONNECTED");

  await createTables();
  console.log("TABLE CREATED");

  await client.end();
  console.log("END OF CONNECTION");
};

syncAndSeed();
