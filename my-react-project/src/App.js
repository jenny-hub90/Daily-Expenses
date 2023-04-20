import React from 'react';

import NewExpense from "./components/NewExpense/NewExpense";
import NewExpenses from "./components/Expenses/NewExpenses";

const App =() => {
  const expenses = [
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

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <NewExpenses items={expenses}/>
    </div>
  );
}

export default App;
