import React,{useState} from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  list:number[]
};
const List2 = (props: List2Props) => {
  const {list,appendEnd,appendStart,reset,clear,popEnd,popStart} = useNumberList(props.list)
  const [val, setval] = useState(0)

  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">List 2</h3>

      {list.map((el,i)=> {
        return <div data-testid="list2-element" key={i}>{el}</div>
      })}
      <input data-testid="list2-input" onChange={(e)=> setval(Number(e.target.value))}/>
      <button data-testid="list2-btn-append-end" onClick={(e)=>appendEnd(val)}>
        Append End
      </button>
      <button data-testid="list2-btn-pop-start" onClick={popStart}>
        Pop Start
      </button>
      <button data-testid="list2-btn-clear" onClick={clear}>
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default List2;
