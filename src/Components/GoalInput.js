import React, { useState } from 'react';

function GoalInput({ addGoal }) {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredGoal.trim() !== '') {
      addGoal.onAddGoal(enteredGoal);
      setEnteredGoal('');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={enteredGoal}
        onChange={goalInputChangeHandler}
      />
      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalInput;
