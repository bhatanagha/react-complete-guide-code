import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css'
import React, { useState } from 'react';

const Expenses = (props) => {
  const [ filteredYear, filterYear ] = useState('2020')

  const newYearSelected = (selectedYear) => {
    filterYear(selectedYear)
  }

  const filteredExpenses = props.expenseses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear
  })

  let expensesContent = <p>Not found</p>
  if (filteredExpenses.length > 0 ) {
     expensesContent = filteredExpenses.map(expenseItem => <ExpenseItem key={expenseItem.id} title={expenseItem.title} amount={expenseItem.amount} date={expenseItem.date} /> )
     }
  const REACT_VERSION = React.version;
    return (
        <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearSelection={newYearSelected} />
    {expensesContent}
        <div>React version: {REACT_VERSION}</div>,
        </Card>
    )
}

export default Expenses;