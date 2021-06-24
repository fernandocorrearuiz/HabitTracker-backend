const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Habit = require("../models/").habit;
const Weight = require("../models/").weight;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const weights = await Weight.findAll({
    where: { userId: req.user.id },
    limit: req.query.limit,
    offset: req.query.offset,
    order: [["createdAt", "DESC"]],
  });
  res.status(200).send({ message: "ok", weights });
});

router.get("/latestWeight", authMiddleware, async (req, res) => {
  const latestWeight = await Weight.findOne({
    where: { userId: req.user.id },
    order: [["createdAt", "DESC"]],
  });
  res.status(200).send({ message: "ok", latestWeight });
});

router.post("/weight", authMiddleware, async (req, res) => {
  const { newKg } = req.body;
  console.log(newKg);
  if (!newKg) {
    return res.status(400).send("Please provide a name");
  }

  const newWeight = await Weight.create({
    Kg: newKg,
    userId: req.user.id,
  });

  return res.status(201).send({ message: "Weight created", newWeight });
});

module.exports = router;
