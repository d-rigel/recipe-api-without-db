const express = require("express");
const router = express.Router();
const { mustBeString } = require("../middlewares/middleware.js");
const { getRecipes, getRecipe } = require("../model/recipe.model");

//route for all recipes
//@route  api/v1/recipes
router.get("/", async (req, res) => {
  try {
    const result = await getRecipes();
    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//route for a particular recipe
//@route  api/v1/recipes/details/:name
router.get(`/details/:name`, mustBeString, async (req, res) => {
  try {
    const { name } = req.params;
    const result = await getRecipe(name);
    return res.json({
      status: "success",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

module.exports = router;
