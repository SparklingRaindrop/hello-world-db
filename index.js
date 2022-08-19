const app = require("express")();

const config = require("./knexfile.js");
const knex = require("knex")(config[process.env.NODE_ENV]);

async function init() {
  await knex.migrate.latest();
  console.log('migration latest');
}

init();

app.get("/", (req, res) => {
  res.send(process.env.GREETING);
});

app.get("/add/:name", async (req, res) => {
  // Ersätt person med den skapade personen från databasen

  const person = await knex("people").insert({ name: req.params.name });

  res.send(person)
})

app.get("/list", async (req, res) => {
  // Ersätt people med alla personer från databasen

  const people = await knex("people").select();

  res.send(people);
})

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`)
})
