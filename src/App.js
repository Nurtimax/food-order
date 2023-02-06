import { useContext } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import "./App.css";
import Basket from "./components/basket/Basket";
import Header from "./components/header/Header";
import MealItem from "./components/meals/MealItem";
import Meals from "./components/meals/Meals";
import Summary from "./components/summary/Summary";
import { FoodOrderContext } from "./store";

function App() {
  const { isBasket } = useContext(FoodOrderContext);
  return (
    <div className="App">
      {isBasket &&
        createPortal(
          <Basket isBasket={isBasket} />,
          document.getElementById("modal")
        )}
      <Header />
      <Content>
        <Summary />
        <Meals />
      </Content>
      <MealItem />
    </div>
  );
}

export default App;

const Content = styled("div")(() => ({
  padding: "6rem 0",
}));
