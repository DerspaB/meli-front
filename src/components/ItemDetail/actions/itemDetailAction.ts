import { actionTypes } from "../types/actionTypes";
import { CurrentItem, Items } from "../types/reducerTypes";

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
