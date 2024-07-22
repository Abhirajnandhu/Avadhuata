const express = require("express");
const Expense = require("../models/Expense");
const jwt = require("jsonwebtoken");

const router = express.Router();
// Add a new expense
router.post("/add", async (req, res) => {
  const { user, date, name, amount, category, description } = req.body;
  const token = req.headers["token"];
  console.log(token);
  const userobj = await jwt.verify(token, "secretkey");
  if (!userobj) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const expense = new Expense({
      user: userobj.id,
      date,
      name,
      amount,
      category,
      description,
    });
    await expense.save();
    res.status(201).json({ message: "Expense added successfully" });
  } catch (error) {
    console.error("Error adding expense:", error);
    res.status(400).json({ error: "Failed to add expense" });
  }
});

// Fetch expenses for a specific user
router.get("/", async (req, res) => {
  const token = req.headers["token"];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const userobj = await jwt.verify(token, "secretkey");
    if (!userobj) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const expenses = await Expense.find({ user: userobj.id });
    res.status(200).json(expenses);
  } catch (error) {
    console.error("Error fetching expenses:", error);
    res.status(500).json({ error: "Failed to fetch expenses" });
  }
});

module.exports = router;
