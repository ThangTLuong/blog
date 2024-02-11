const Created = (req, res, msg) => {
  if (msg) res.send(201).json(msg);
  else res.sendStatus(201);
}

module.exports = Created;