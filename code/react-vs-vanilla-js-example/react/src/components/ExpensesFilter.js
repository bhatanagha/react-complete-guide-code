import './ExpensesFilter.css'
import { useState } from 'react'

function ExpensesFilter (props) {
  const onFilter = (e) => {
    props.onYearSelection(e.target.value)
  }
    return (
        <div className="expenses-filter">
          <h2>Expenses Filter</h2>
          <select onChange={onFilter}>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
          </select>
        </div>
    )
}

export default ExpensesFilter;