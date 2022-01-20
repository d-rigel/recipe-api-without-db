//importing json file
let filename = "../data/data.json";
let recipes = require(filename);
const {
  mustBeInArray,
  newDate,
  writeJSONFile,
} = require("../helpers/helper.js");

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

//get a particular recipe
const getRecipe = (name) => {
  return new Promise((resolve, reject) => {
    mustBeInArray(recipeArray, name)
      .then((recipe) => resolve(recipe))
      .catch((err) => reject(err));
  });
};

//create a recipe
const insertRecipe = (newRecipe) => {
  return new Promise((resolve, reject) => {
    const date = {
      createdAt: newDate(),
    };

    newRecipe = { ...date, ...newRecipe };
    recipeArray.push(newRecipe);
    writeJSONFile(filename, recipeArray);
    resolve(newRecipe);
  });
};

//updtate a recipe func
const updateRecipe = (name, newRecipe) => {
  return new Promise((resolve, reject) => {
    mustBeInArray(recipeArray, name)
      .then((recipe) => {
        const index = recipeArray.findIndex((r) => r.name == recipe.name);
        const date = {
          createdAt: recipe.createdAt,
          updatedAt: newDate(),
        };
        recipeArray[index] = { ...date, newRecipe };
        writeJSONFile(filename, recipeArray);
        resolve(recipeArray[index]);
      })
      .catch((err) => reject(err));
  });
};

//delete a recipe
const deleteRecipe = (name) => {
  return new Promise((resolve, reject) => {
    mustBeInArray(recipeArray, name)
      .then((recipe) => {
        recipeArray = recipeArray.filter((r) => r.name !== name);
        writeJSONFile(filename, recipeArray);
        resolve(recipeArray[index]);
      })
      .catch((err) => reject(err));
  });
};

module.exports = {
  getRecipes,
  getRecipe,
  insertRecipe,
  updateRecipe,
  deleteRecipe,
};
