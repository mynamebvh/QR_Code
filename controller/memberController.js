const User = require("../model/Member");

module.exports.insert = async (req, res) => {
  const data = req.query;
  console.log(data);
  try {
    await User.create(data);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(200).json({
      status: "err",
      msg: error.message,
    });
  }
};

module.exports.showList = async (req, res) => {
  const data = await User.find({});

  console.log(data);
  // res.json(data);
  res.render("list-register.ejs", {
    data,
  });
};
