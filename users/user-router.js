const express = require("express");
const Users = require("./usermodel.js");
const restrict = require("../middleware/restricted.js");

const router = express.Router();

router.get("/", restrict("admin"), async (req, res) => {
  try {
    res.json(await Users.find());
  } catch (error) {
    res.status(400).json({ errorMessage: "Can not retrieve users" });
  }
});

module.exports = router;
