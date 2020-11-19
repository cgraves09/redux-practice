import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counterActions";
import { loggedIn } from "./actions/isLoggedInAction";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLoggedIn = useSelector((state) => state.loggedIn);

  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux App</h1>
      <h3>Counter: {counter}</h3>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        {!isLoggedIn ? (
          <button onClick={() => dispatch(loggedIn())}>Login</button>
        ) : (
          <div>
            <p>You are logged in</p>
            <button onClick={() => dispatch(loggedIn())}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
