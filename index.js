const db = require("knex")(require("./knexfile.js")[process.env.NODE_ENV] || require("./knexfile.js").development);
const app = require("express")();

app.get("/", (req, res) => {
  res.send(process.env.GREETING);
})

app.get("/add/:name", async (req, res) => {
  // Ersätt person med den skapade personen från databasen
  const person = {
    id: 0,
    name: "Ryan"
  }; 
  const result = await db('people')
  .insert({ name: req.params.name });
  res.send(result);
})

app.get("/list", async (req, res) => {
  // Ersätt people med alla personer från databasen
  const result = await db('people')
    .select();
  res.send(result);
})

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server is listening on port ${process.env.PORT || 4000}`)
})
