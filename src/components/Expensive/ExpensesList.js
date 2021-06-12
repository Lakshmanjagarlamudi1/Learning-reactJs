import React from "react";
import "./ExpensesList.css";
import ExpensiveItem from "./ExpensiveItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No records found</h2>;
  }
  return (
    <ul className="expenses_list">
      {props.items.map((expense) => (
      <ExpensiveItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </ul>
  );
};

export default ExpensesList;
