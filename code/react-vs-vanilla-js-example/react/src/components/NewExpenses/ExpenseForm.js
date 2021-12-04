import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    // const [enteredTitle, SetEnteredTitle] = useState('')

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })
    const titleChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: e.target.value }
        })
    }

    const amountChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: e.target.value }
        })
    }

    const dateChangeHandler = (e) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })

        setUserInput((prevState) => {
            return { ...prevState, enteredDate: e.target.value }
        })
    }

    const submitHandler = () => {
        const data = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }

        props.newExpenseData(data)
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" onChange={dateChangeHandler}></input>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;