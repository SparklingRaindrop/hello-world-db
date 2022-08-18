const app = require("express")();

const config = require("./knexfile.js");
const knex = require("knex")(config[process.env.NODE_ENV] || 'development');

app.get("/", (req, res) => {
  res.send(process.env.GREETING);
})

app.get("/add/:name", async (req, res) => {
  // Ersätt person med den skapade personen från databasen
  const person = {
    id: 0,
    name: "Ryan"
  }; 
  const result = await knex('people').insert({ name: req.params.name });
  res.send(result)
})

app.get("/list", (req, res) => {
  // Ersätt people med alla personer från databasen
  const people = [{
    id: 0,
    name: "Ryan"
  }];

  res.send(people);
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 4000}`)
})
