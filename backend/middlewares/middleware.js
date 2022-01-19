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

module.exports = {
  mustBeString,
};
