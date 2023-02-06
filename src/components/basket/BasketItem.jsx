import React from "react";

const BasketItem = ({ img }) => {
  return (
    <div className="product">
      <figure>
        <img src={img} alt="" />
        <figcaption>
          <span>Samsung Galaxy S21 128gb синий</span>
          <p className="price">Price: $12</p>
          <p className="available">Available: 12</p>
        </figcaption>
      </figure>
      <div className="change_data">
        <div className="counter">
          <span>Quantity: 0</span>
          <div className="btns">
            <button>+</button>
            <button>-</button>
          </div>
        </div>
        <div className="total">Total: $12</div>
      </div>
    </div>
  );
};

export default BasketItem;
