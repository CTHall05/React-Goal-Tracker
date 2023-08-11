import React, { useState } from 'react';
import GoalInput from './GoalInput';
import GoalList from './GoalList';
import './App.css';

function App() {
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  };

  return (
    <div className="App">
      <h1>Goal Tracker</h1>
    </div>
  );
}

export default App;
