import { useState, useRef } from 'react'
import './user.css'
const User = (props) => {

    const nameInpRef = useRef() // using ref
    const ageInpRef = useRef()

    const [isValid, setValidName] = useState(true) // using state
    // const [name, setEnteredName] = useState('')
    // const [age, setEnteredAge] = useState('')

    // const nameChangeHandler = (e) => {
    //     setEnteredName(e.target.value)
    // }

    // const ageChangeHandler = (e) => {
    //     setEnteredAge(e.target.value)
    // }

    function submitHandler(e) {
        const enteredName = nameInpRef.current.value
        const enteredAge = ageInpRef.current.value

        if (enteredName.trim().length > 0) {
            e.preventDefault()
            setValidName(true)
            const data = {
                name: enteredName, // or name
                age: enteredAge    // or age  (from state)
            }
            props.newUserData(data)
            nameInpRef.current.value = ''
            ageInpRef.current.value = ''
            // setEnteredName('')
            // setEnteredAge('')
        } else setValidName(false)
    }
    
  return (
      <div>
      <form>
    <div className="User">
       <div className="new-expense__control">
            <label>Name</label>
            <input
            className={`name-input ${!isValid ? 'invalid' : ''}`} type="text"
            //  value={name}
            //   onChange={nameChangeHandler}
            ref={nameInpRef}
            ></input>
        </div>

        <div className="new-expense__control">
            <label>Age</label>
            <input type="number"
            //  value={age}
            //  onChange={ageChangeHandler}
             ref={ageInpRef}></input>
        </div>
    <button type="button" onClick={submitHandler}>Add User</button>
    <button type="button">Cancel</button>
    </div>
    </form>
      </div>
  );
}

export default User;
