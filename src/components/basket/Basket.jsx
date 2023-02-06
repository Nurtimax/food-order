import React, { useContext } from "react";
import styled from "styled-components";
import { FoodOrderContext } from "../../store";
import BasketItem from "./BasketItem";

const Basket = () => {
  const { setIsBasket, basketItem } = useContext(FoodOrderContext);

  return (
    <StyledBasket>
      <div className="backdrop" onClick={setIsBasket} />
      <div className="basket_item">
        {!basketItem.length ? (
          <div className="empty">Card is empty</div>
        ) : (
          basketItem.map((basket) => <BasketItem key={basket.id} />)
        )}
      </div>
    </StyledBasket>
  );
};

export default Basket;

const StyledBasket = styled.div`
  & .basket_item {
    position: fixed;
    height: 100vh;
    background: white;
    top: 100px;
    right: 0;
    width: 20vw;
    animation: BASKET 0.25s linear 1;
    border-radius: 5px;
    padding: 1rem;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  & .empty {
    font-size: 23px;
  }

  & .backdrop {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #0000007f;
  }

  & .product:not(:last-child) {
    border-bottom: 1px solid;
    padding: 1rem 0;
  }

  figure {
    display: flex;
    gap: 12px;
  }

  figure img {
    width: 100px;
    height: 130px;
    border-radius: 5px;
  }

  figure figcaption {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  & .change_data {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    & .counter {
      width: 100%;
      & .btns {
        display: flex;
        gap: 25px;
        & button {
          width: 30px;
          font-size: 20px;
        }
      }
      & span {
        width: 100%;
      }
    }
  }

  @keyframes BASKET {
    0% {
      width: 0;
    }
    100% {
      width: 20vw;
    }
  }
`;
