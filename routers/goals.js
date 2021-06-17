const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Habit = require("../models/").habit;
const Goal = require("../models/").goal;

const router = new Router();

router.get("/", async (req, res) => {
  const goals = await Goal.findAll();
  res.status(200).send({ message: "ok", goals });
});

module.exports = router;
