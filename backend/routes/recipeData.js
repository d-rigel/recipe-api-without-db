const express = require("express");
const router = express.Router();
const { getRecipes } = require("../model/recipe.model");

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

module.exports = router;
