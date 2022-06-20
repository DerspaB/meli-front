import { actionTypes } from "../types/actionTypes";
import { PreviewItemReducer } from "../types/reducerTypes";

// creamos los estados iniciales que contendran los atributos de nuestro reducer
export const previewItemInitialState: PreviewItemReducer = {
  items: [],
  loading: false,
};

// creamos nuestro reducer el cual se encargara de mantener la logica de cuando se haga
// el llamado de una u otra accion y validar que comportamiento es que el tiene que realizar
// esto se hace mediante un switch sobre nuestros action.type
export const previewItemReducer = (
  state: PreviewItemReducer,
  action: actionTypes
) => {
  switch (action.type) {
    case "setItems":
      return {
        ...state,
        items: action.payload,
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
