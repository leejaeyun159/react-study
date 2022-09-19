import "./ExpenseForm.css";
import { useState } from 'react';

const ExpenseForm = (props) =>{
        const [ enteredTitle, setEnteredTitle ] = useState('');
        const [ enteredAmount, setEnteredAmount ] = useState('');
        const [ enteredDate, setEnteredDate ] = useState('');
        const [ enterForm, setEnterForm ] = useState(false);

        const titleChangeHandler = e => {
            setEnteredTitle(e.target.value);
        };
        const amountChangeHandler = e => {
            setEnteredAmount(e.target.value);
        };
        const dateChangeHandler = e => {
            setEnteredDate(e.target.value);
        };

        const enterAddBtnHandler = e =>{
          setEnterForm(true);
        };
        const enterCancelHandler = e =>{
          setEnterForm(false);
        }


        const submitHandler = (e) =>{
            e.preventDefault(); //기본동작 막기
            
            const expenseData = {
                title:enteredTitle,
                amount: enteredAmount,
                date:new Date(enteredDate)
            };

            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredAmount('');
            setEnteredDate('');
        };
        
          return enterForm === false ? (
            <button onClick={enterAddBtnHandler}>Add new Expense</button>
          ) : (
            <form onSubmit={submitHandler}>
              <div className="new-expense__controls">
                <div className="new-expense__control">
                  <label>Title</label>
                  <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}
                  />
                </div>
                <div className="new-expense__control">
                  <label>Amount</label>
                  <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}
                  />
                </div>
                <div className="new-expense__control">
                  <label>Date</label>
                  <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}
                  />
                </div>
              </div>
              <div className="new-expense__actions">
                <button type="button" onClick={enterCancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
              </div>
            </form>
          );
};
export default ExpenseForm;