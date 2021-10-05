var jwt = require("jsonwebtoken");

module.exports.auth = (req, res, next) => {
  let token = null;
  try {
    token = req.cookies.token;
    var decoded = jwt.verify(token, "hoangdzsiucap");

    if (decoded.u === "admin") {
      next();
    } else {
      res.json({ err: "khum có quyền" });
    }
  } catch (err) {
    res.json({ err: "khum có quyền" });
  }
};
