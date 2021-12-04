import Expenses from './components/Expenses';
import NewExpense from './components/NewExpenses/NewExpenses';
import React, { useState } from 'react';

let expenses = [{
  id: '1', title: 'sss', amount: '67', date: new Date(2020, 2, 3)
},
{ id: '2', title: 'aaa', amount: '56', date: new Date(2017, 4, 8) },
{ id: '3', title: 'fff', amount: '76', date: new Date(2018 ,4 ,5) }]

const App = () => {
  const [ allData, setAllData ] = useState(expenses)

  const appendCompleteData = (newExpense) => {
    setAllData((prevExpenses) => {
      return [newExpense, ...prevExpenses]
    })
    console.log(newExpense, 'newExpense')
    console.log(expenses, 'expenses array')
    console.log(allData, 'allData state variable')
  }
  return (
    <div>
      <NewExpense appendAllData={appendCompleteData}/>
      <Expenses expenseses={allData}></Expenses>
    </div>
  );
}

export default App;
