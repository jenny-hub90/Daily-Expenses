import React, { useState } from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import NewExpenses from "./components/Expenses/NewExpenses";
const DUMMY_EXPENSES = [
  { 
    id: 'e1',
    title : 'Toilet Paper',
    amount : 345,
    date: new Date(2023, 4, 13),
  },
  { 
    id: 'e2',
    title : 'Scooter Insurance',
    amount : 5000,
    date: new Date(2023, 4, 13),
  },
  { 
    id: 'e3',
    title : 'Tumbler',
    amount : 2800,
    date: new Date(2023, 4, 13),
  },
  { 
    id: 'e4',
    title : 'Car Insurance',
    amount : 20000,
    date: new Date(2023, 4, 13),
  },
];
const App = () => {
    const [expenses, setExpenses]=useState(DUMMY_EXPENSES);
    const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <NewExpenses items={expenses}/>
    </div>
  );
}

export default App;
