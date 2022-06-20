import { CurrentItem } from "./reducerTypes";

export type actionTypes =
  | { type: "setCurrentItem"; payload: CurrentItem }
  | { type: "setLoading"; payload: boolean };
