import React from "react";
import { Button, Label } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const myState = useSelector(state => state.count);
  return (
    <div className="container" align="center">
      <div>
        <h1> Counter by React-Redux</h1>
        <Button negative onClick={() => dispatch(decrementCount())}>
          <span>-</span>{" "}
        </Button>
        <Label style={{ padding: "10px", fontSize: 30 }}> {myState} </Label>
        <Button positive onClick={() => dispatch(incrementCount())}>
          <span>+</span>
        </Button>
      </div>
    </div>
  );
};

export default App;
