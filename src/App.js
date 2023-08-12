import React, { useState } from 'react';
import GoalInput from './Components/GoalInput';
import GoalList from './Components/GoalList';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  const removeGoal = (goalToRemove) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal !== goalToRemove));
  };

  return (
    <div className="container">
      <h1 className="header">React Goal Tracker</h1>
      <GoalInput onAddGoal={addGoalHandler} />
      <GoalList goals={goals} onRemoveGoal={removeGoal} />
    </div>
  );
}

export default App;
