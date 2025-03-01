import React, { useState } from "react";
import HabitList from "./HabitList";

const AddHabit = () => {
  const [habit, setHabit] = useState("");
  const [trackHabit, setTrackHabit] = useState([]);

  const updateHabit = (e) => {
    e.preventDefault();
    setHabit("");
    setTrackHabit([...trackHabit, habit]);
  };


  return (
    <div className="main">
      <div className="container">
        <h1 className="header">Habit Tracker</h1>
        <form onSubmit={updateHabit} className='forms'>
          <input
            type="text"
            placeholder="Enter Habit Name"
            required
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
          />
          <button type="submit">Add Habit</button>
        </form>
        {trackHabit.length ? (<HabitList list={trackHabit} setTrackHabit={setTrackHabit} />) : "No Habits added yet!"}
      </div>
    </div>
  );
};

export default AddHabit;
