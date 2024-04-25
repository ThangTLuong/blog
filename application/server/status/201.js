const Created = (req, res, msg) => {
  if (msg) res.status(201).json(msg);
  else res.sendStatus(201);
};

module.exports = Created;
