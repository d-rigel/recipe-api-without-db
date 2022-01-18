//importing json file
let filename = "../data/data.json";
let recipes = require(filename);

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

module.exports = {
  getRecipes,
};
