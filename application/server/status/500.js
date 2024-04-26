async function InternalServerError(req, res, msg) {
  if (msg) res.status(500).json(msg);
  else res.sendStatus(500);
}

module.exports = InternalServerError;
