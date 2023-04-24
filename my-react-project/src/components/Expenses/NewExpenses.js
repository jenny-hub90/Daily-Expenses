import React, { useState } from 'react';


import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './NewExpenses.css';
import ExpensesChart from './ExpensesChart';
import ExpenseList from './ExpensesList';


const NewExpenses = (props) => {
  const  [filteredYear, setFilteredYear] = useState('2020'); 

  const filterChangeHandler = selectedYear =>{

    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
     return expense.date.getFullYear().toString() === filteredYear;
  });


  return( 
    <div>
    <Card className="expenses">
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpenseList items={filteredExpenses}/>
    </Card>
    </div>
    ); 
};


export default NewExpenses;