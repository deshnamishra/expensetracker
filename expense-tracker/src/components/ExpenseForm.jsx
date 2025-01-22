import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [expense, setExpense] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expense);
    setExpense({ description: '', amount: '', category: '' });
  };

  return (
    <div className="card">
      <h2 className="card-title">Add New Expense</h2>
      <form className="expense-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={expense.description}
          onChange={(e) => setExpense({...expense, description: e.target.value})}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={expense.amount}
          onChange={(e) => setExpense({...expense, amount: e.target.value})}
          required
        />
        <select
          value={expense.category}
          onChange={(e) => setExpense({...expense, category: e.target.value})}
          required
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};