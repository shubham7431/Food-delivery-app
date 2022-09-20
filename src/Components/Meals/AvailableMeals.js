import React from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Shahi Paneer",
    description: "Finest Paneer and veggies",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "A Hyderabad specialty!",
    price: 216.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 112.99,
  },
  {
    id: "m4",
    name: "Rajma Rice Bowl",
    description: "Healthy...and green...",
    price: 118.99,
  },
];
const AvailableMeals = () => {
  const MealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{MealList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
