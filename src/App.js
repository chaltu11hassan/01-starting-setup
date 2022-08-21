import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
// import ExpenseItem from "./components/ExpenseItem"; //*moved to Expenses file

import NewExpense from "./components/NewExpense/NewExpense";

//*custom made components must be capitalized

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },

  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },

  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {

 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(expense);

    // setExpenses([expense, ...expenses]); //not correct

    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    });

  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
