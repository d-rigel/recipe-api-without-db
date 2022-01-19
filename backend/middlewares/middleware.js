const mustBeString = (req, res, next) => {
  const { name } = req.params;
  if (Number.isInteger(parseInt(name))) {
    res.status(400).json({
      message: "ID must be a string",
    });
  } else {
    next();
  }
};

// const mustBeInteger = (req, res, next) => {
//   const id = req.params.id;
//   if (!Number.isInteger(parseInt(id))) {
//     res.status(400).json({
//       message: "ID must be an integer",
//     });
//   } else {
//     next();
//   }
// };

module.exports = {
  mustBeString,
};
