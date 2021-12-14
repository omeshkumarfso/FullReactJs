import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
// import Test from "./test/Test.js";

const DUMMY_EXPENSES = [
  {
    id: "e1", title: "Car Insurance", amount: 295, date: new Date(2021,2,28)
  },
  {
    id: "e2", title: "Car Insurance", amount: 294, date: new Date(2020,2,27) 
  },
  {
    id: "e3", title: "Car Insurance", amount: 293, date: new Date(2021,2,26) 
  },
  {
    id: "e4", title: "Car Insurance", amount: 292, date: new Date(2022,2,25) 
  },
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
   setExpenses((prevExpenses) => {
     return [expense, ...prevExpenses];
   });
  };

  return (
    <div>
     <NewExpense onAddExpense={addExpenseHandler} />
     <Expenses items={expenses} />
  {/* <Test ></Test> */}
    </div>
  );
}

export default App;