import { actionTypes } from "../types/actionTypes";
import { CurrentItem, ItemDetailReducer } from "../types/reducerTypes";

// creamos los estados iniciales que contendran los atributos de nuestro reducer
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

// creamos nuestro reducer el cual se encargara de mantener la logica de cuando se haga
// el llamado de una u otra accion y validar que comportamiento es que el tiene que realizar
// esto se hace mediante un switch sobre nuestros action.type
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
