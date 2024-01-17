const Ok = (req, res, msg) => {
  if (msg) res.status(200).json(msg);
  else res.sendStatus(200);
}

module.exports = Ok;