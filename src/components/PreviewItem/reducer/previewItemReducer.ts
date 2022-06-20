import { actionTypes } from "../types/actionTypes";
import { PreviewItemReducer } from "../types/reducerTypes";

export const previewItemInitialState: PreviewItemReducer = {
  items: [],
  loading: false,
};

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
