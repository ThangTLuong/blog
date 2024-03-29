const isAuth = (req, res, next) => {
  const { user_id, username, authorized } = req.session;
  if (req.session && user_id && username && authorized) next();
  else res.sendStatus(401);
}

module.exports = isAuth;