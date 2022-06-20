import { useReducer } from "react"
import { previewItemInitialState, previewItemReducer } from "../reducer/previewItemReducer"
import { PreviewItemContext } from '../context/usePreviewItem';

export const PreviewItemProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(previewItemReducer, previewItemInitialState)

    const value = { state, dispatch }
    return (
        <PreviewItemContext.Provider value={value}>
            {children}
        </PreviewItemContext.Provider>
    )
}