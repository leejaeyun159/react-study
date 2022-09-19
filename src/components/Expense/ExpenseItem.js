import ExpenseDate from "./ExpenseDate";
import "../../App.css";
import Card from "../UI/Card.js"
import { useState } from "react";

const ExpenseItem=(props)=> {
  const [title, setTitle] = useState(props.title);
  
  const clickUpdate = () => {
    setTitle('updated');
  }
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}달러</div>
        </div>
        <button onClick={clickUpdate}>버튼</button>
      </Card>
    </li>
  );
}
export default ExpenseItem;
