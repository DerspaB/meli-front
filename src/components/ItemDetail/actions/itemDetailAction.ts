import { actionTypes } from "../types/actionTypes";
import { CurrentItem, Items } from "../types/reducerTypes";

// este archivo se crea la funcion de itemDetailAction el cual retornara
// las diferentes formas de poder hacer un dispatch a nuestro reducer segun nuestros
// actionTypes

export const itemDetailAction = () => {
  const setCurrentItem = (value: CurrentItem): actionTypes => ({
    type: "setCurrentItem",
    payload: value,
  });
  const setLoading = (value: boolean): actionTypes => ({
    type: "setLoading",
    payload: value,
  });

  return {
    setCurrentItem,
    setLoading,
  };
};
