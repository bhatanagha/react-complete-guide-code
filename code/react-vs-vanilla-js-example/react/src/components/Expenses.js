import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter.js';
import './Expenses.css'
import { useState } from 'react';

function Expenses (props) {
  const [ selectedYear, filterYear ] = useState('2020')
  const newYearSelected = (selectedYear) => {
    filterYear(selectedYear)
  }
    return (
        <Card className="expenses">
                <ExpensesFilter onYearSelection={newYearSelected} />
    {props.expenseses.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> )}
        </Card>
    )
}

export default Expenses;