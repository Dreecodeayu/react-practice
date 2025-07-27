import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black rounded-sm">Tailwind test</h1>
      <Card username="ayush1"/>
      <Card username="ayush2"/>
    </>
  );
}

export default App;
