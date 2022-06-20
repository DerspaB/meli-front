import { actionTypes } from "../types/actionTypes";
import { Items } from "../types/reducerTypes";

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
