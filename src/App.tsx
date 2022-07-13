import React from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Card from "./components/Card";
import Tab from "./components/Tab";
import Pagination from "./components/Pagination";
import Link from "./components/Link";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="App">
      <Header />   
      <SignIn/>
    </div>
  );
}

export default App;
