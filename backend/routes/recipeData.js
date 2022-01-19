const express = require("express");
const router = express.Router();
// const { mustBeInteger } = require("../middlewares/middleware.js");
// const { getRecipes, getRecipe } = require("../model/recipe.model");
const m = require("../middlewares/middleware");
const recipe = require("../model/recipe.model");

//route for all recipes
//@route  api/v1/recipes
router.get("/", async (req, res) => {
  await recipe
    .getRecipes()
    .then((recipes) => res.json(recipes))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({
          message: err.message,
        });
      } else {
        res.status(500).json({
          message: err.message,
        });
      }
    });
});

//route for a particular recipe
//@route  api/v1/recipes/:id
router.get(`/details/:name`, async (req, res) => {
  const { name } = req.params;
  await recipe
    .getRecipe(name)
    .then((recipe) => res.json(recipe))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({
          message: err.message,
        });
      } else {
        res.status(500).json({
          message: err.message,
        });
      }
    });
});

module.exports = router;
