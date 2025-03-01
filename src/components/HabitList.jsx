import React from "react";
import HabitStreak from "./HabitStreak";

const HabitList = ({list, setTrackHabit}) => {

  const delHabit = (index)=>{
    const newHabit = list.filter((_, li)=> li !== index);
    setTrackHabit(newHabit);
  };

  return (
    <div className="habit-list">
      {list.map((li, index) => (
          <ul key={index}>
            <li className="habit-card"><div className="head-del">{li}
            <button onClick={() => delHabit(index)}>Delete</button></div>
            <HabitStreak />
            </li>
          </ul>
      ))}
    </div>
  );
};

export default HabitList;
