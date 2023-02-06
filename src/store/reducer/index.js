import { ADDPRODUCT, BASKET_ITEM, BASKET_MODAL } from "../../utils/constants";

export const initialState = {
  isBasket: false,
  basketItems: [],
  generateId: 1,
  product: [],
};

export const foodOrderReducer = (state, { type, payload }) => {
  switch (type) {
    case BASKET_MODAL:
      return {
        ...state,
        isBasket: !state.isBasket,
      };

    case BASKET_ITEM:
      return {
        ...state,
        basketItems: [
          ...state.basketItems,
          { id: state.generateId, ...payload },
        ],
      };

    case ADDPRODUCT:
      return {
        ...state,
        product: [...state.product, { ...payload, id: state.generateId }],
        generateId: state.generateId + 1,
      };

    default:
      return state;
  }
};
