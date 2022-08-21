import React from "react";

// //import React, { useState } from 'react'; //extract named things

import ExpenseDate from "./ExpenseDate";

import Card from "../UI/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  //props = properties

  //useState()= react hook (starts with use) //must be in function and not nested
  // //
  //using const here bc its a state updating value its not exactly reasining..its a function
  ////console.log('ExpenseItem evaluated by React');

  // const clickHandler =()=>{
  //   setTitle('Updated!')
  //   // assigns a new value like normal and then executes component function as state changes
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amount}</div>
      </Card>
    </li>
  );
}

//* Presentational/ dumb component = outputs some data but not interactive (stateless)

export default ExpenseItem;
