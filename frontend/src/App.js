import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./styles/App.css";
import Login from './components/Login';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div>
        <h2 id="head"><i>Expense-Tracker</i></h2>
        <nav className='nav1'>
          <Link to="/register" className='reg'>Register</Link>
          <Link to="/login" className='log'>Login</Link>
        </nav>
        <Routes>
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-expense" element={<ProtectedRoute element={<AddExpense />} />} />
          <Route path="/expense-list" element={<ProtectedRoute element={<ExpenseList />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
