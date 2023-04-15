import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
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
  return (
    <div>
      <h1>Let's get started!</h1>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount}
      date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[1].title} 
      amount={expenses[1].amount}
      date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[2].title} 
      amount={expenses[2].amount}
      date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={expenses[3].title} 
      amount={expenses[3].amount}
      date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
