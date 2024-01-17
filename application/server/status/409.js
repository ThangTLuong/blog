const Conflict = (req, res, msg) => {
  if (msg) res.send(409).json(msg);
  else res.sendStatus(409);
}

module.exports = Conflict;