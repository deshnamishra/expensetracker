import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

const Guest = () => {
  const [expenses, setExpenses] = React.useState([]);

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
    <div className="main-content">
      <h1>Guest Session</h1>
      <p>Try our expense tracker without signing up!</p>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList 
        expenses={expenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
      />
    </div>
  );
};

export default Guest; 