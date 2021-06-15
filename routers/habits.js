const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Habit = require("../models/").habit;

const router = new Router();

router.get("/", async (req, res) => {
  const habits = await Habit.findAll({ include: [User] });
  res.status(200).send({ message: "ok", habits });
});

router.patch("/:id", async (req, res, next) => {
  try {
    const habit = await Habit.findByPk(req.params.id);

    await habit.update({ consecutiveDays: habit.consecutiveDays + 1 });

    return res.status(200).send({ habit });
  } catch (e) {
    next(e);
  }
});

router.patch("/:id/consecutiveDays", async (req, res, next) => {
  try {
    const habit = await Habit.findByPk(req.params.id);

    await habit.update({ consecutiveDays: 0 });

    return res.status(200).send({ habit });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
