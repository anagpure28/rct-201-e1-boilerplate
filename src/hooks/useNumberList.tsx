import {useState} from "react"

const useNumberList = (initialArray: number[]) => {
  const [list, setList] = useState(initialArray)

  const appendStart = (val:number)=>{
    list.unshift(val)
  }
  const appendEnd = (val:number)=>{
    list.push(val)
  }
  const popStart = ()=>{
    list.shift()
  }
  const popEnd = ()=>{
    list.pop()
  }
  const clear = ()=>{
    setList([])
  }
  const reset = ()=>{
    setList(initialArray)
  }
  return {list,appendEnd,appendStart,reset,clear,popEnd,popStart}
};

export default useNumberList;
