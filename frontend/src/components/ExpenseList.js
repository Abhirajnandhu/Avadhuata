import React, { useEffect, useState } from "react";
import { getExpenses } from "../api";
import "../styles/ExpenseList.css"

const ExpenseList = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getExpenses();
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        alert("failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="div4">
      <h2 id="head1">Expense List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense._id}>
              <td>{expense.date}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>{expense.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;


