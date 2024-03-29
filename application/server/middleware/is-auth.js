const status = require("../status");

const isAuth = (req, res, next) => {
  const { user_id, username, authorized } = req.session;
  if (req.session && user_id && username && authorized) next();
  else status.Unauthorized(req, res);
}

module.exports = isAuth;