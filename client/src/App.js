import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FileTable from "./FileTable";
import Header from "./Header";
import FileSearch from "./FileSearch";

function App() {
  const [searchedFileName, setSearchedFileName] = useState("");

  const handleSearch = (fileName) => {
    setSearchedFileName(fileName);
  };
  return (
    <div className="App">
      <Header />
      <FileSearch onSearch={handleSearch} />
      <FileTable fileName={searchedFileName} />
    </div>
  );
}

export default App;
