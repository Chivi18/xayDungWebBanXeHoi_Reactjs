import { useState} from "react";

function Testfunction(x) {
  const [count, setCount] = useState(1);
  const tangso = (Count234) => {
     setCount(Count234 + 1);
  };
  
  return (
    <div>
      <p  onClick={() => tangso(count)}>hello</p> {count}
      <p onClick={() => setCount(count-1)}>hello</p>
    </div>
  );
}
export default Testfunction;
