import React from "react";
import { MyContext } from "./App";

const C = () => {
  return (
    <MyContext.Consumer>{(data) => <h1>C: {data.dept}</h1>}</MyContext.Consumer>
  );
};

export default C;
