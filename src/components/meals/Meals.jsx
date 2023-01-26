import React from "react";
import styled from "styled-components";
const Meals = () => {
  return (
    <Card>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </Card>
  );
};

export default Meals;
const Card = styled.div`
  text-align: center;
  margin: -160px auto auto;
  background-color: #383838;
  border-radius: 14px;
  position: relative;
  box-shadow: 0 1px 18px 10px rgb(0 0 0 / 25%);
  width: 854px;
  height: 270px;
  color: #fff;
  display: grid;
  align-items: center;
  padding: 1rem;
`;
