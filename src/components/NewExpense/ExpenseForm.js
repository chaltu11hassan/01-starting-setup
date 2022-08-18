import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  //*alternative to above 3

  //    const [userInput, setUserInput] = useState({
  //         enteredTitle: '',
  //         enteredAmount: '',
  //         enteredDate: ''
  //     });

  //* whenever you update state and you depend on previous state you should not do it in object way like this but should use an alternative form of the state updating function

  //alternatives commented out

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value,
    // })

    //* instead do this: pass in a function that will be executed by react

    // setUserInput((prevState)=>{
    //     return {...prevState, enteredTitle:event.target.value };
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value,
    // })

    // setUserInput((prevState)=>{
    //     return {...prevState, enteredAmount:event.target.value };
    // })
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value,
    // })

    // setUserInput((prevState)=>{
    //     return {...prevState, enteredDate:event.target.value };
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault(); //stops reloading

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">

        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          ></input>
        </div>

      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>

    </form>
  );
};

export default ExpenseForm;
