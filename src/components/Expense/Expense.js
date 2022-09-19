import { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import './Expense.css'
import Card from '../UI/Card'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

const Expense=(props)=>{
   const [filteredYear, setFilteredYear] = useState("2022");

    const selectHandler = selc =>{
      setFilteredYear(selc);
    }

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

   
    return (
      <Card className="expenses">
        <div>
        <ExpenseFilter 
        selected = {filteredYear} 
        onSelectYear = {selectHandler}/>
        </div>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    );
  
}
export default Expense;