import { useState } from "react";
import "./App.css";
import ShowCategory from "./Components/Categorey/ShowCategory";
import CategoreyData from "./Components/CategoreyData/CategoreyData";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [cat, selectedCat] = useState("");
  console.log(cat);

  return (
    <>
      <Navbar></Navbar>
      <ShowCategory selectedCat={selectedCat}></ShowCategory>
      <CategoreyData cat={cat}></CategoreyData>
    </>
  );
}

export default App;
