import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';


function App() {
  const [date, setDate] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
        clearInterval(timerID);
      };
   });
  
  function tick() {
    setDate(new Date().toLocaleTimeString());
  }

  const hours = new Date().getHours()
  const isDayTime = hours > 6 && hours < 18

  return (
    <div className={isDayTime ? 'day' : 'night'}>
      <header className="App-header">
        {date}
      </header>
    </div>
  );
}

export default App;
