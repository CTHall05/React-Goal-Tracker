import React from 'react';

function GoalList({ goals, onRemoveGoal }) {
  const completedGoal = () => {
    const element = document.getElementById('test');
    element.style.textDecoration = 'line-through';
  };

  return (
    <ul className="goal-list">
      {goals.map((goal) => (
        <li id="test" key={goal} className="goal-item">
          {goal}
          <button onClick={() => completedGoal()}>Completed</button>
          <button onClick={() => onRemoveGoal(goal)} className="remove-button">
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
