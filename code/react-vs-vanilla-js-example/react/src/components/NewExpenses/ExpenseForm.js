import { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

    // const [enteredTitle, SetEnteredTitle] = useState('')

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: e.target.value }
        // })
    }

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredAmount: e.target.value }
        // })
    }

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value
        // })

        // setUserInput((prevState) => {
        //     return { ...prevState, enteredDate: e.target.value }
        // })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const data = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(data)
        props.newExpenseData(data)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
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
                <button type="submit">Add expense</button>
                <button type="button" onClick={props.onCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default ExpenseForm;