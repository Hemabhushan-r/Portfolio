//import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import { useEffect } from "react";

///

function App() {
  useEffect(() => {
    document.title = "R Hema Bhushan's Portfolio";
  }, []);
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/Portfolio" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
