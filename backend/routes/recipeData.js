const express = require("express");
const router = express.Router();
const { mustBeString, checkFields } = require("../middlewares/middleware.js");
const {
  getRecipes,
  getRecipe,
  insertRecipe,
  updateRecipe,
} = require("../model/recipe.model");

//route for all recipes
//@GET  api/v1/recipes
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
//@GET  api/v1/recipes/details/:name
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

//route for recipe update
//@GET  api/v1/recipes/:name
router.put(`/:name`, mustBeString, async (req, res) => {
  try {
    const { name } = req.params;
    const result = await updateRecipe(name, req.body);
    if (result.name) {
      return res.json({
        status: "success",
        message: "updated successfully",
      });
    }
    return res.json({
      status: "error",
      message: "Unable to update recipe, please try again later",
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//Create a new recipe
//@POST  api/v1/recipes
router.post("/", checkFields, async (req, res) => {
  try {
    const result = await insertRecipe(req.body);
    res.json({
      status: "success",
      message: "new recipe has been created",
      result,
    });
    if (result.name === req.body.name) {
      return res.json({
        status: "error",
        message: "name already exists",
      });
    }
  } catch (error) {
    //Done because of limited functions without using database! lol :(
    let message = "Unable to create the recipe, please try again later!";
    if (
      error.message.includes(
        "ENOENT: no such file or directory, open '../data/data.json'"
      )
    ) {
      message = "new recipe created with warning!";
    }
    res.json({
      status: "error",
      message,
    });
  }
});

module.exports = router;
