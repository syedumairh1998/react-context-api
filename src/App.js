import A from "./A";
import "./App.css";
import React from "react";
export const MyContext = React.createContext();

function App() {
  const [name, setName] = React.useState({
    name: "Umair",
    age: 21,
    dept: "Computer Science",
  });
  return (
    <MyContext.Provider value={name}>
      <h1>App.js</h1>
      <A />
    </MyContext.Provider>
  );
}

export default App;
