import React from "react";
import "./App.css";

import Header from "./components/layout/header";

import Homepage from "./pages/homepage";

function App() {
  return (
    <>
      <Header />
      <Homepage />
      <Header />
    </>
  );
}

export default App;
