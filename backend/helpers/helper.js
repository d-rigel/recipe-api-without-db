// function mustBeInArray(array, id) {
//   return new Promise((resolve, reject) => {
//     const row = array.find((r) => r.id == id);
//     if (!row) {
//       reject({
//         message: "Id is not found",
//       });
//     }
//     resolve(row);
//   });
// }

function mustBeInArray(array, name) {
  return new Promise((resolve, reject) => {
    const row = array.find((r) => r.name == name);
    if (!row) {
      reject({
        message: "name is not found",
      });
    }
    resolve(row);
  });
}

module.exports = {
  mustBeInArray,
};
