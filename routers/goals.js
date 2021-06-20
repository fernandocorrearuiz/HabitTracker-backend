const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Habit = require("../models/").habit;
const Goal = require("../models/").goal;

const router = new Router();

router.get("/", authMiddleware, async (req, res) => {
  const goals = await Goal.findAll({ where: { userId: req.user.id } });
  res.status(200).send({ message: "ok", goals });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const toDelete = await Goal.findByPk(id);
  const deleteGoal = await toDelete.destroy();
  res.json({ message: "Goal Deleted", deleteGoal });
});

router.post("/goal", authMiddleware, async (req, res) => {
  const { title, objective, currentLevel } = req.body;
  if (!title || !objective || !currentLevel) {
    return res
      .status(400)
      .send("Please provide a title, objective and current level");
  }

  const newGoal = await Goal.create({
    title,
    objective,
    currentLevel,
    userId: req.user.id,
  });

  return res.status(201).send({ message: "Goal created", newGoal });
});

module.exports = router;
