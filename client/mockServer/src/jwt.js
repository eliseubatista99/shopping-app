const jwt = require("jsonwebtoken");

const getToken = () => {
  return jwt.sign(
    {
      sub: "Elideus",
      // iat: 1700000000,
      // exp: 1700003600,
    },
    "senha-super-secreta",
    {
      expiresIn: "1h",
    }
  );
};

module.exports = {
  getToken,
};
