import { useEffect, useState } from "react";
import MealItem from './MealItem.jsx';

export default function Meals() {
  const [load, setLoad] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response) {
      }
      const meals = await response.json();
      setLoad(meals);
    }

    fetchMeals();
  }, []);

  return (
    <div>
      <ul id="meals">
        {load.map((meal) => (
          <MealItem key={meal.id} meal={meal}/>
        ))}
      </ul>
    </div>
  );
}


