const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Habit = require("../models/").habit;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const habits = await Habit.findAll({ where: { userId: req.user.id } });
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

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const toDelete = await Habit.findByPk(id);
  const deleteHabit = await toDelete.destroy();
  res.json({ message: "Habit Deleted", deleteHabit });
});

router.post("/habit", authMiddleware, async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).send("Please provide a name");
  }

  const newHabit = await Habit.create({
    name,
    userId: req.user.id,
  });

  return res.status(201).send({ message: "Habit created", newHabit });
});

module.exports = router;
