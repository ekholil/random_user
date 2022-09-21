const usersCollection = require("./users");
exports.getRandomUser = (req, res) => {
  const user = usersCollection.findRandomUser();
  res.status(201).json(user);
};
exports.getAllUser = (req, res) => {
  const users = usersCollection.findAllUser();
  res.status(201).json({ items: users, total: users.length });
};
exports.saveUser = (req, res) => {
  const { gender, name, contact, address, photoUrl } = req.body;
  const user = usersCollection.createUser(
    gender,
    name,
    contact,
    address,
    photoUrl
  );
  res.status(201).json({
    message: "User Saved successfully",
    user,
  });
};
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = usersCollection.updateUserById(id, req.body);
  if (!user) {
    return res.status(404).json({ message: "404 not found" });
  }
  res.status(200).json(user);
};
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  const isDeleted = usersCollection.deleteById(id);
  if (isDeleted) {
    res.status(201).json({ message: "user deleted succesfully" });
  } else {
    res.status(400).json({ message: "Delete operation failed" });
  }
};
exports.getById = (req, res) => {
  const user = usersCollection.findById(req.params.id);
  if (user) {
    res.status(201).json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
