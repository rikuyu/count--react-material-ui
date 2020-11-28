import React from "react";
import { useState } from "react";
import { Button } from "@material-ui/core";

export default function CountButton() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  const countDown = () => {
    setCount(count - 1);
  };

  const countReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <Button
        size="small"
        variant="contained"
        color="secondary"
        style={{ margin: "5px", fontSize: "20px", padding: "0" }}
        onClick={countUp}
      >
        +
      </Button>
      <Button
        size="small"
        variant="contained"
        color="primary"
        style={{ margin: "5px", fontSize: "20px", padding: "0" }}
        onClick={countDown}
      >
        -
      </Button>
      <br />
      <Button
        size="medium"
        variant="contained"
        onClick={countReset}
        style={{ margin: "5px", width: "135px" }}
      >
        reset
      </Button>
    </div>
  );
}
