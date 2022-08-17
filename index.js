const app = require("express")();

const config = require("./knexfile.js");
const knex = require("knex")(config[process.env.NODE_ENV]);

app.get("/", (req, res) => {
  res.send(process.env.GREETING);
})

app.get("/add/:name", async (req, res) => {
  // Ersätt person med den skapade personen från databasen


  const result = await knex('people').insert({ name: req.params.name });
  res.send(result);
})

app.get("/list", async (req, res) => {
  // Ersätt people med alla personer från databasen


  const result = await knex('people').select();
  res.send(result);
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
})
