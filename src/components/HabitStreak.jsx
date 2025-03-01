import React, { act, useState } from 'react'

const HabitStreak = () => {

const [days, setDays] = useState(Array(7).fill(false));

const handleClick = (index)=>{
    const activeDays = [...days];
    activeDays[index] = !activeDays[index]
    setDays(activeDays);
}

const consecutive = ()=>{
  for(let i=0; i<days.length; i++){
    if(days[i] && days[i + 1] && days[i + 2]){
      return true;
    }
  }
  return false;
}

  return (
    <div className='streak'>
        {days.map((streak, index) => (
            <button key={index} onClick={() => handleClick(index)} style={{backgroundColor : streak ? "green" : "#f4f4f4", color : streak ? "white" : "black", cursor : "pointer"}} >{index + 1}</button>
        ))}
        {consecutive() && <div>🔥</div>}
    </div>
  )
}

export default HabitStreak