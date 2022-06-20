import { createContext, useContext } from "react";
import { actionTypes } from "../types/actionTypes";
import { ItemDetailReducer } from "../types/reducerTypes";
import { itemDetailState } from "../reducer/itemDetailReducer";

interface itemDetailContext {
  state: ItemDetailReducer;
  dispatch: React.Dispatch<actionTypes>;
}

// Se crea un Contexto el cual le asignamos el tipo de ItemDetailContext el cual tendra nuestro state del reducer y nuestro dispatch
export const ItemDetailContext = createContext<itemDetailContext>({
  state: itemDetailState,
  dispatch: () => {},
});

// Se crea un custom hook para validar que nuestro contexto no contenta una instancia indefinida
// y una vez se valide que si contiene una instancia, lo retornamos para su uso posterior

export const useItemDetail = () => {
  const context = useContext(ItemDetailContext);
  if (context === undefined) {
    throw new Error("useItemDetail debe ser usado con un Proveedor");
  }

  return context;
};
