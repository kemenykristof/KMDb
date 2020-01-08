import React from "react";
import Navbar from "./Navbar";
import SearchArea from "./SearchArea";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <SearchArea></SearchArea>
    </div>
  );
};
export default App;
