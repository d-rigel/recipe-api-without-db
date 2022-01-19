//importing json file
let filename = "../data/data.json";
let recipes = require(filename);
// const { mustBeInArray } = require("../helpers/helper.js");
const helper = require("../helpers/helper.js");
let recipeArray = recipes.recipes;

//function to get all recipes
const getRecipes = () => {
  return new Promise((resolve, reject) => {
    if (recipes.length === 0) {
      reject({
        message: "no recipes available",
        status: 202,
      });
    }
    resolve(recipes);
  });
};

//get a particular post
function getRecipe(name) {
  console.log("from single recipe", recipeArray);
  return new Promise((resolve, reject) => {
    helper
      .mustBeInArray(recipeArray, name)
      .then((recipe) => resolve(recipe))
      .catch((err) => reject(err));
  });
}

module.exports = {
  getRecipes,
  getRecipe,
};
