import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";

function App() {
  const {hours, minutes, seconds} = useClock();

  return (
    <div className="App">
      <Clock hours={hours} minutes={minutes} seconds={seconds}/>
      <List1 list={[1,2,3]}/>
      <List2 list={[4,5]}/>
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
