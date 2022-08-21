import React, { useState } from "react";

// import ExpenseItem from "./ExpenseItem";

import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

import ExpensesList from "./ExpensesList";



function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020"); //intial/default value

  const filterChangeHandler = (selectedYear) => {
    // console.log('In Expenses.js');
    // console.log(selectedYear);

    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;

//* .map() creates a new array based on another array
