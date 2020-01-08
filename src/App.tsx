import React from "react";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SearchArea></SearchArea>
    </div>
  );
};
export default App;
