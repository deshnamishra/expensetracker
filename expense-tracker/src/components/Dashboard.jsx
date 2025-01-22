import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([
    { description: 'Grocery Shopping', amount: '2,500' },
    { description: 'Electricity Bill', amount: '1,800' },
    { description: 'Movie Tickets', amount: '600' }
  ]);

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleEditExpense = (index) => {
    const expense = expenses[index];
    const newDescription = prompt('Edit Description:', expense.description);
    const newAmount = prompt('Edit Amount:', expense.amount);
    
    if (newDescription && newAmount) {
      const updatedExpenses = [...expenses];
      updatedExpenses[index] = {
        description: newDescription,
        amount: newAmount
      };
      setExpenses(updatedExpenses);
    }
  };

  const handleDeleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <>
      <Navbar showOptions={true} />
      <div className="main-content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <ExpenseList 
          expenses={expenses}
          onEdit={handleEditExpense}
          onDelete={handleDeleteExpense}
        />
        <div className="card total-box">
          <h2 className="card-title">Total Expenses</h2>
          <div className="total-amount">
            ₹{expenses.reduce((sum, expense) => 
              sum + parseInt(expense.amount.replace(',', '')), 0
            ).toLocaleString()}
          </div>
          <div>This Month</div>
        </div>
      </div>
    </>
  );
};