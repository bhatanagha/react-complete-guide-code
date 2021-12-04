import React, { useState } from 'react';

import './ExpenseItem.css';
import Modal from './Modal';
import ExpenseDate from './ExpenseDate';

function ExpenseItem (props) {
  const [title, setTitle] = useState(props.title)

  const onClickHandler = () => {
    setTitle('changed')
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={onClickHandler}>Add expense</button>
    </div>
  );
}

export default ExpenseItem;
