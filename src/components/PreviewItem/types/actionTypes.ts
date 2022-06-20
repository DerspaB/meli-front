import { Items } from "./reducerTypes";

export type actionTypes =
  | { type: "setItems"; payload: Items[] }
  | { type: "setLoading"; payload: boolean };
