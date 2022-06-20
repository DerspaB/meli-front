import { createContext, useContext } from "react";
import { actionTypes } from "../types/actionTypes";
import { PreviewItemReducer } from "../types/reducerTypes";
import { previewItemInitialState } from "../reducer/previewItemReducer";

interface previewItemContext {
  state: PreviewItemReducer;
  dispatch: React.Dispatch<actionTypes>;
}

// Se crea un Contexto el cual le asignamos el tipo de PreviewItemContext el cual tendra nuestro state del reducer y nuestro dispatch
export const PreviewItemContext = createContext<previewItemContext>({
  state: previewItemInitialState,
  dispatch: () => {},
});

// Se crea un custom hook para validar que nuestro contexto no contenga una instancia indefinida
// y una vez se valide que si contiene una instancia, lo retornamos para su uso posterior

export const usePreviewItem = () => {
  const context = useContext(PreviewItemContext);
  if (context === undefined) {
    throw new Error("usePreviewItem debe ser usado con un Proveedor");
  }

  return context;
};
