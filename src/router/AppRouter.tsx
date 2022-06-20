import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainContainer } from '../components/MainContainer/MainContainer';
import { ItemDetailPage } from '../pages/ItemDetail/ItemDetailPage'
import { ItemsSearch } from '../pages/ItemsSearch/ItemsSearch';


// Este componente es el encargo de crear las diferentes rutas que se utilizaran en la aplicacion
// y asignarles su correspondiente componente
export const AppRouter = () => {
    return (
        <MainContainer>
            <Routes>
                <Route path='/items' element={<ItemsSearch />} />
                <Route path='/items/:id' element={<ItemDetailPage />} />
            </Routes>
        </MainContainer>
    )
}
