import React from 'react';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className="card">
      <h2 className="card-title">Recent Expenses</h2>
      <ul className="expense-list">
        {expenses.map((expense, index) => (
          <li key={index} className="expense-item">
            <span>{expense.description}</span>
            <span>₹{expense.amount}</span>
            <button className="edit-btn" onClick={() => onEdit(index)}>Edit</button>
            <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};