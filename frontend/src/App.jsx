import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount} from './redux/features/counterSlice.js'
import { useState } from 'react';

const App = () => {
  const[num,setnum] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>{count}</h1>
      <input type="number" onChange={(e)=>setnum(e.target.value)}/>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(Number(num)))}>Increment by {num}</button>
    </div>
  )
}

export default App