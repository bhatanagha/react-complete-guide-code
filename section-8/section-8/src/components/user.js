import { useState } from 'react'
import './user.css'
const User = (props) => {

    const [isValid, setValidName] = useState(false)
    const [name, setEnteredName] = useState('')
    const [age, setEnteredAge] = useState('')

    const nameChangeHandler = (e) => {
        setEnteredName(e.target.value)
    }

    const ageChangeHandler = (e) => {
        setEnteredAge(e.target.value)
    }

    function submitHandler(e) {
        if (name.trim().length > 0) {
            e.preventDefault()
            setValidName(true)
            const data = {
                name: name,
                age: age
            }
            props.newUserData(data)
            setEnteredName('')
            setEnteredAge('')
        }
    }
    
  return (
      <div>
      <form>
    <div className="User">
       <div className="new-expense__control">
            <label>Name</label> 
            <input className={`name-input ${isValid ? '' : 'invalid'}`} type="text" value={name} onChange={nameChangeHandler}></input>
        </div>

        <div className="new-expense__control">
            <label>Age</label>
            <input type="number" value={age} onChange={ageChangeHandler}></input>
        </div>
    <button type="button" onClick={submitHandler}>Add User</button>
    <button type="button">Cancel</button>
    </div>
    </form>
      </div>
  );
}

export default User;
