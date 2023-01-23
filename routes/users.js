const { users } = require("./data/index");

app.get("/users", (req, res) => {
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  return res.json(users.find((user) => user._id === parseInt(req.params.id)));
});

app.post("/users", (req, res) => {
  const record = {
    ...req.body,
    _id: users[users.length - 1]._id + 1,
  };
  users.push(record);
  return res.json(record);
});

app.put("/users/:id", (req, res) => {
  // Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
  const record = users.find((user) => user._id === parseInt(req.params.id));
  if (!record) {
    return res.status(404).json({ error: "User not found" });
  }
  const index = users.indexOf(record);
  const updatedRecord = { ...record, ...req.body };
  users.splice(index, 1, updatedRecord);
  return res.json(updatedRecord);
});

app.delete("/users/:id", (req, res) => {
  // Delete one user matching the path param (id)
  const record = users.find((user) => user._id === parseInt(req.params.id));
  if (!record) {
    return res.status(404).json({ error: "User not found" });
  }
  const index = users.indexOf(record);
  users.splice(index, 1);
  return res.json(record);
});
