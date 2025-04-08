import React, { useEffect, useState } from "react";

const CategoreyData = ({ cat }) => {
  console.log(cat);
  const [mealData, setMealData] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`)
      .then((res) => res.json())
      .then((data) => setMealData(data.meals));
  }, [cat]);
  return (
    <div className=" mt-10 bg-[#F8F8F8] w-11/12 m-auto">
      <div className="grid grid-cols-3 m-auto place-items-center bg-white border-red-200">
        {mealData?.map((meal) => (
          <div className="meal-container">
            <img className="w-100" src={meal.strMealThumb} alt="" />
            <h1>{meal.strMeal}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoreyData;
