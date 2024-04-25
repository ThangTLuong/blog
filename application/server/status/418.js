const ImATeapot = (req, res, msg) => {
  if (msg) res.status(418).json(msg);
  else res.sendStatus(418);
};

module.exports = ImATeapot;
