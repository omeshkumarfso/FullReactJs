import React, { useState } from 'react';
import Card from '../UI/Card.js';
import ExpenseFilter from './ExpenseFilter.js';
import './Expenses.css';
import './ExpenseFilter.css';
import ExpensesList from './ExpensesList.js';
import ExpensesChart from './ExpensesChart.js';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectYear) => {
    setFilteredYear(selectYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    } );

    

  return (
    <div>
      <li>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
      </li>
    </div>
  );
}

export default Expenses;
