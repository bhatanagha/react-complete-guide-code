import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
  const [ isEditing, setIsEditing ] = useState(false)
  const newExpenseDataFunc = (newExpense) => {
    const newEnteredData = {
      id: Math.random().toString(),
      ...newExpense
    }
    console.log(newEnteredData)
    props.appendAllData(newEnteredData)
    setIsEditing(false)
  }


  const setIsEditingHandler = () => {
    setIsEditing(true)
  }

  const onCancelHandler = () => {
    setIsEditing(false)
  }
    return (
        <div className="new-expense">
          {!isEditing && <button onClick={setIsEditingHandler}>Add new expense</button>}
          {isEditing && <ExpenseForm newExpenseData={newExpenseDataFunc} onCancel={onCancelHandler} />}
        </div>
    )
}

export default NewExpense