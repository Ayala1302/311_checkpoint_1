const { users } = require("../data/users");

module.exports = {
    list: (req, res) => {
        return res.json(users);
    },
    show: (req, res) => {
        return res.json(users.find((user) => user._id === parseInt(req.params.id)));
    },
    create: (req, res) => {
        const record = {
            ...req.body,
            _id: users[users.length - 1]._id + 1,
        };
        users.push(record);
        return res.json(record);
    },
    update: (req, res) => {
        const record = users.find((user) => user._id === parseInt(req.params.id));
        if (!record) {
            return res.status(404).json({ error: "User not found" });
        }
        const index = users.indexOf(record);
        const updatedRecord = { ...record, ...req.body };
        users.splice(index, 1, updatedRecord);
        return res.json(updatedRecord);
    },
    remove: (req, res) => {
        const record = users.find((user) => user._id === parseInt(req.params.id));
        if (!record) {
            return res.status(404).json({ error: "User not found" });
        }
        const index = users.indexOf(record);
        users.splice(index, 1);
        return res.json(record);
    },
}