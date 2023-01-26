import React from "react";
import styled from "styled-components";
import MealP from "./meal-p/MealP";

const DUMMY_MEALS = [
  {
    id: Date.now().toString(),
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: Date.now().toString(),
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16.22,
  },
  {
    id: Date.now().toString(),
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price:  12.99,
  },
  {
    id: Date.now().toString(),
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
];
const MealItem = () => {
  return (
      <Card>
        {DUMMY_MEALS.map((meal) => {
          return <MealP meal={meal} />;
        })}
      </Card>
  );
};

export default MealItem;
const Card = styled.div`
  background: #ffffff;
  border-radius: 16px;
  width: 75rem;
  margin: 50px auto;
  padding: 40px;
`;
