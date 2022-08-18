
import React, { useState } from 'react'; //extract named things

import ExpenseDate from './ExpenseDate';

import Card from '../UI/Card';

import "./ExpenseItem.css";


function ExpenseItem(props) { //props = properties

  
  //useState()= react hook (starts with use) //must be in function and not nested

  const [title, setTitle] = useState(props.title);
  //using const here bc its a state updating value its not exactly reasining..its a function

  console.log('ExpenseItem evaluated by React');

  const clickHandler =()=>{
    
    setTitle('Updated!') 
    // assigns a new value like normal and then executes component function as state changes

    console.log(title);
  };

  return (
    <Card className="expense-item">

      <ExpenseDate date={props.date}></ExpenseDate>
      
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
