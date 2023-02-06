import React, { useContext } from "react";
import styled from "styled-components";
import { FoodOrderContext } from "../../store";
import MealP from "./meal-p/MealP";

const MealItem = () => {
  const {} = useContext(FoodOrderContext);

  return (
    <Card>
      {[].map((meal) => {
        return <MealP meal={meal} key={meal.id} />;
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
