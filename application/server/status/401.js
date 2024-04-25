const Unauthorized = (req, res, msg) => {
  if (msg) res.status(401).json(msg);
  else res.sendStatus(401);
};

module.exports = Unauthorized;
