//To make sure the req params is a string
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

//To make sure the input fields are not empty
const checkFields = (req, res, next) => {
  const { name, ingredients, instructions } = req.body;
  if (name && ingredients && instructions) {
    next();
  } else {
    res.status(400).json({
      message: "Fields are required",
    });
  }
};

module.exports = {
  mustBeString,
  checkFields,
};
