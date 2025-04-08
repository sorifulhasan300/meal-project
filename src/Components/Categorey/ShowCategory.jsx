import React, { useEffect, useState } from "react";
import CategoreyData from "../CategoreyData/CategoreyData";

const ShowCategory = ({ selectedCat }) => {
  const [cat, setCat] = useState([]);


  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCat(data.categories));
  }, []);
  //   console.log(cat);

  return (
    <div className="flex gap-4 mt-8 items-center justify-center">
      {cat.map((cat) => (
        <button
          onClick={() => selectedCat(cat.strCategory)}
          className=" border-2 border-[#422AD5] cursor-pointer hover:bg-[#422AD5] hover:text-white  rounded-md p-2 w-60 font-bold mr-4 ml-4 text-black"
        >
          {cat.strCategory}
        </button>
      ))}
    </div>
  );
};

export default ShowCategory;
