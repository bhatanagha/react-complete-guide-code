import './NewExpenses.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
  const newExpenseData = (newExpense) => {
    const newEnteredData = {
      id: Math.random().toString(),
      ...newExpense
    }
    props.appendAllData(newEnteredData)
  }
    return (
        <div className="new-expense">
          <ExpenseForm newExpenseData={newExpenseData}/>
        </div>
    )
}

export default NewExpense