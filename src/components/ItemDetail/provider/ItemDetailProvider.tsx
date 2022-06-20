import { useReducer } from "react"
import { itemDetailReducer, itemDetailState } from "../reducer/itemDetailReducer"
import { ItemDetailContext } from '../context/useItemDetail';

// creamos un componente provider el cual permitira usar nuestro contexto creado
// y poder pasar el estado de nuestro reducer a todos los hijos que esten dentro del provider
// evitando asi la necesidad de usar obligatoriamente props para recibir parametros

export const ItemDetailProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(itemDetailReducer, itemDetailState)

    const value = { state, dispatch }
    return (
        <ItemDetailContext.Provider value={value}>
            {children}
        </ItemDetailContext.Provider>
    )
}