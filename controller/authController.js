var jwt = require("jsonwebtoken");

module.exports.login = (req, res) => {
  const { p, u } = req.body;

  if (u === "admin" && p === "hoangdz") {
    const token = jwt.sign(
      {
        u,
      },
      "hoangdzsiucap",
      { expiresIn: "30d" },
    );

    res.cookie("token", token, {
      expires: new Date(Date.now() + 60 * 60 * 24 * 5),
    });
    res.status(200).json({ msg: "success" });
  } else {
    res.status(404).json({ msg: "error" });
  }
};
