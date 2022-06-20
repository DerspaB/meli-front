import { actionTypes } from "../types/actionTypes";
import { Items } from "../types/reducerTypes";

// este archivo se crea la funcion de previewItemsAction el cual retornara
// las diferentes formas de poder hacer un dispatch a nuestro reducer segun nuestros
// actionTypes
export const previewItemsAction = () => {
  const setItems = (value: Items[]): actionTypes => ({
    type: "setItems",
    payload: value,
  });
  const setLoading = (value: boolean): actionTypes => ({
    type: "setLoading",
    payload: value,
  });

  return {
    setItems,
    setLoading,
  };
};
