const express = require("express");
const app = express();
const morgan = require("morgan");
const pkg = require("./package.json");

const recipeRouter = require("./routes/recipeData.js");
//Logger
app.use(morgan("tiny"));

//Set body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//home route
app.get("/", (req, res) => {
  res.send(`${pkg.description} v${pkg.version}`);
});

app.use("/api/v1/recipes", recipeRouter);

// //Route to return all recipe names
// app.get("/recipes", async (req, res) => {
//   try {
//     const recipeData = await data;
//     return res.json({
//       status: "success",
//       recipeData,
//     });
//   } catch (error) {
//     res.json({
//       status: "error",
//       message: error.message,
//     });
//   }
// });

// //Route to return all recipe names
// app.get("/recipes/details/:name", async (req, res) => {
//   try {
//     const { name } = req.params;
//     // console.log("name params", name);
//     const result = await getRecipeByName(name);
//     console.log("seeeeeeeeeeee", name);
//   } catch (error) {
//     res.json({
//       status: "error",
//       message: error.message,
//     });
//   }
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
