const users = require("../data/index");

module.exports = {
  list: (req, res) => {
    return res.json(users);
  },
  show: (req, res) => {
    const record = users.find((user) => user.id === parseInt(req.params.id));
    if (!record) {
      res.status(404).json({ error: "User can't be found" });
    }
    return res.json(users.find((user) => user.id === parseInt(req.params.id)));
  },
  create: (req, res) => {
    const record = {
      id: users[users.length - 1].id + 1,
      ...req.body,
    };
    users.push(record);
    return res.json(record);
  },
  update: (req, res) => {
    const record = users.find((user) => user.id === parseInt(req.params.id));
    if (!record) {
      return res.status(404).json({ error: "User not found" });
    }
    const index = users.indexOf(record);
    const updatedRecord = { ...record, ...req.body };
    users.splice(index, 1, updatedRecord);
    return res.json(updatedRecord);
  },
  remove: (req, res) => {
    const record = users.find((user) => user.id === parseInt(req.params.id));
    if (!record) {
      return res.status(404 ).json({ error: "User not found" });
    }
    const index = users.indexOf(record);
    users.splice(index, 1);
    return res.json(record);
  },
};
