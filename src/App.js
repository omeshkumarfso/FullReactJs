import Expenses from "./components/Expenses";
// import Test from "./test/Test.js";
function App() {

  const expenses = [
    {
      id: "e1", title: "Car Insurance", amount: 295, date: new Date(2021,2,28)
    },
    {
      id: "e2", title: "Car Insurance", amount: 294, date: new Date(2021,2,27) 
    },
    {
      id: "e3", title: "Car Insurance", amount: 293, date: new Date(2021,2,26) 
    },
    {
      id: "e4", title: "Car Insurance", amount: 292, date: new Date(2021,2,25) 
    },
  ]

  return (
    <div>
      <h2 style={{color:"white"}}>Yogic</h2>
     <Expenses items={expenses} />
  {/* <Test ></Test> */}
    </div>
  );
}

export default App;