import { useState } from "react";
import "./App.css";
import "./components/SignIn";
import SignIn from "./components/SignIn";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <SignIn />
    </div>
  );
}

export default App;
