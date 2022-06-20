import { useReducer } from "react"
import { itemDetailReducer, itemDetailState } from "../reducer/itemDetailReducer"
import { ItemDetailContext } from '../context/useItemDetail';

export const ItemDetailProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(itemDetailReducer, itemDetailState)

    const value = { state, dispatch }
    return (
        <ItemDetailContext.Provider value={value}>
            {children}
        </ItemDetailContext.Provider>
    )
}