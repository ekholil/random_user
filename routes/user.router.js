const router = require("express").Router();
const fs = require("fs");
const {
  getRandomUser,
  getAllUser,
  saveUser,
  updateUser,
  deleteUser,
  getById,
} = require("../src/controller");
router.get("/random", getRandomUser);
router.get("/all", getAllUser);
router.get("/:id", getById);
router.post("/save", saveUser);
router.patch("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);

module.exports = router;
