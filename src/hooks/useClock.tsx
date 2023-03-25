import {useState, useEffect} from "react";

const useClock = () => {
  const today = new Date();
  console.log(today)
  const [hours, sethours] = useState(today.getHours())
  const [minutes, setminutes] = useState(today.getMinutes())
  const [seconds, setseconds] = useState(today.getSeconds())
  // TODO
  // refer readme.md for what to return
  useEffect(() => {
    if(seconds>=60){
      setseconds(0)
      setminutes(minutes+1)
    }
    if(minutes>=60){
      setseconds(0)
      setminutes(0)
      sethours(hours+1)
    }
    if(hours>=24){
      setseconds(0)
      setminutes(0)
      sethours(0)
    }
    let id = setInterval(()=> {
      setseconds(seconds+1);
    },1000)
  
    return () => {
      clearInterval(id)
    }
  }, [seconds])
  
  return {hours, minutes, seconds}
};

export default useClock;
