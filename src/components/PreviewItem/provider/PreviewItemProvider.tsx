import { useReducer } from "react"
import { previewItemInitialState, previewItemReducer } from "../reducer/previewItemReducer"
import { PreviewItemContext } from '../context/usePreviewItem';


// creamos un componente provider el cual permitira usar nuestro contexto creado
// y poder pasar el estado de nuestro reducer a todos los hijos que esten dentro del provider
// evitando asi la necesidad de usar obligatoriamente props para recibir parametros
export const PreviewItemProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(previewItemReducer, previewItemInitialState)

    const value = { state, dispatch }
    return (
        <PreviewItemContext.Provider value={value}>
            {children}
        </PreviewItemContext.Provider>
    )
}