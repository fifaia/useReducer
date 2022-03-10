import "./styles.css";
import { reducer, initialState } from "./reducer";
import { useReducer, useState } from "react";
// bla ba
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // asd
  const onChange = (e) => {
    dispatch(e.target.value);
    console.log(e.target.value);
  };
  //
  return (
    <div className="App">
      <h2>{state.number}</h2>
      <h2>{state.text}</h2>
      <input type="number" onChange={onChange} />
    </div>
  );
}
