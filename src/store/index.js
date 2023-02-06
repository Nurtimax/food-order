import { useReducer } from "react";
import { createContext } from "react";
import { ADDPRODUCT, BASKET_ITEM, BASKET_MODAL } from "../utils/constants";
import { foodOrderReducer, initialState } from "./reducer";

export const FoodOrderContext = createContext();

const FoodOrderProvider = ({ children }) => {
  const [basket, setIsBasket] = useReducer(foodOrderReducer, initialState);
  console.log(basket);

  const toggleBasketModalHandler = () => {
    setIsBasket({ type: BASKET_MODAL });
  };

  const addBasket = (data) => {
    setIsBasket({ type: BASKET_ITEM, payload: data });
  };

  const addProduct = (data) => {
    setIsBasket({ type: ADDPRODUCT, payload: data });
  };

  return (
    <FoodOrderContext.Provider
      value={{
        isBasket: basket.isBasket,
        setIsBasket: toggleBasketModalHandler,
        basketItem: basket.basketItems,
        addBasket,
        addProduct,
        product: basket.product,
      }}
    >
      {children}
    </FoodOrderContext.Provider>
  );
};
export default FoodOrderProvider;
