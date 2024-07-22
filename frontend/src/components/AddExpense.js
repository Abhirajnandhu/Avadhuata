import React, { useState } from "react";
import { addExpense } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/AddExpense.css";

const AddExpense = () => {
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAddExpense = async () => {
    const userId = "user_id_from_auth";
    try {
      await addExpense({
        user: userId,
        date,
        name,
        amount,
        category,
        description,
      });
      alert("Expense added successfully");
      navigate("/expense-list");
    } catch (error) {
      alert("Failed to add expense");
    }
  };

  return (
    <div className="div3">
      <h1>Add Expense</h1>
      <nav>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button type="button" className="btn2" onClick={handleAddExpense}>
          Add Expense
        </button>
      </nav>
    </div>
  );
};

export default AddExpense;
