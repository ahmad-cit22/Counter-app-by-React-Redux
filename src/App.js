import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  increment2,
  decrement,
  decrement2,
  multiply,
  multiply2,
  division,
  division2,
} from "./features/counter/counterSlice";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  return (
    <div>
      <h1
        style={{
          fontSize: "50px",
          textAlign: "center",
          marginTop: "100px",
          color: "teal",
        }}
      >
        A Simple Counter App
      </h1>

      <h2
        style={{
          fontSize: "30px",
          textAlign: "center",
          marginTop: "20px",
          color: "teal",
        }}
      >
        built with React-Redux
      </h2>
      <div
        style={{
          width: "700px",
          margin: "100px auto",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            margin: "20px 20px",
            fontSize: "53px",
            color: "teal",
          }}
        >
          {count}
        </p>

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "10px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Increment value"
            onClick={() => dispatch(increment2())}
          >
            Increment (+10)
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement2())}
          >
            Decrement (-10)
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(multiply())}
          >
            Multiply (x2)
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(multiply2())}
          >
            Multiply (x5)
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(division())}
          >
            Division (/2)
          </button>
          <button
            style={{
              fontSize: "20px",
              cursor: "pointer",
              color: "teal",
              border: "1px solid teal",
              borderRadius: "6px",
              padding: "7px 10px",
            }}
            aria-label="Decrement value"
            onClick={() => dispatch(division2())}
          >
            Division (/5)
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
