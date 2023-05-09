import { useDispatch, useSelector } from "react-redux";
import counterSlice, { decreament, increament, increamentByAmount } from "./redux/counterSlice";



function App() {
  const count =
    useSelector(state => state.counter.value)
  const dispatch = useDispatch();
  const increamentHandler = () => {
    dispatch(increament())
  }
  const decreamentHandler = () => {
    dispatch(decreament())
  }
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increamentHandler}>+</button>
      <button onClick={decreamentHandler}>-</button>
      <button onClick={() => { dispatch(increamentByAmount(5)) }}>Increase by 5</button>
    </div>
  );
}

export default App;
