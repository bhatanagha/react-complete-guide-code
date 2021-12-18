import './App.css';
import User from './components/user';
import List from './components/list';
import React, { useState } from 'react';

function App() {

 const [usersList, setUsersList] = useState([])

  const userData = (newsetUserData) => {

    setUsersList(prevState => {
      return [...prevState, { name: newsetUserData.name, age: newsetUserData.age, id: Math.random().toString() }]
    })
  }

  return (
    <div className="App">
     <User newUserData={userData}/>
     <List users={usersList} />
    </div>
  );
}

export default App;
