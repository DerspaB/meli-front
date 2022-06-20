import { Items } from "./reducerTypes";

// este archivo es para poder darle unos tipos especificos a nuestras acciones
// validando asi el llamado del type y tambien el tipo de contenido que debe llevar
// su respectivo payload
export type actionTypes =
  | { type: "setItems"; payload: Items[] }
  | { type: "setLoading"; payload: boolean };
