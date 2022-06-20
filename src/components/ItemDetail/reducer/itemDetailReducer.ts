import { actionTypes } from "../types/actionTypes";
import { CurrentItem, ItemDetailReducer } from "../types/reducerTypes";

const currentItemInitial: CurrentItem = {
  id: "",
  title: "",
  price: { amount: 0, currency: "", decimals: 0 },
  picture: "",
  condition: "",
  sold_quantity: 0,
  description: "",
};

export const itemDetailState: ItemDetailReducer = {
  currentItem: currentItemInitial,
  loading: false,
};

export const itemDetailReducer = (
  state: ItemDetailReducer,
  action: actionTypes
) => {
  switch (action.type) {
    case "setCurrentItem":
      return {
        ...state,
        currentItem: action.payload,
      };
    case "setLoading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
