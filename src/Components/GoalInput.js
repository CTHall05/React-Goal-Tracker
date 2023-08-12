import React, { useState } from 'react';

function GoalInput({ onAddGoal }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim() !== '') {
      onAddGoal(enteredGoal);
      setEnteredGoal('');
    }
  };

  return (
    <form onSubmit={submitHandler} className="goal-form">
      <input
        type="text"
        value={enteredGoal}
        onChange={goalInputChangeHandler}
        className="goal-input"
      />
      <button type="submit" className="button">
        Add Goal
      </button>
    </form>
  );
}

export default GoalInput;
