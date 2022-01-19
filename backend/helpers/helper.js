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

module.exports = {
  mustBeInArray,
};
