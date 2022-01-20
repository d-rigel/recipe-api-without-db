const fs = require("fs");

const mustBeInArray = (array, name) => {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.name == name);
    if (!row) {
      reject({
        message: "name is not found",
      });
    }
    resolve(row);
  });
};

//func to generate a default date on each recipe
const newDate = () => new Date().toString();

//function to write to json file
const writeJSONFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

module.exports = {
  mustBeInArray,
  newDate,
  writeJSONFile,
};
