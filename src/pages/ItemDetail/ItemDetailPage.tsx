import { ItemDetail } from '../../components/ItemDetail/ItemDetail'
import { ItemDetailProvider } from '../../components/ItemDetail/provider/ItemDetailProvider'


export const ItemDetailPage = () => {

    return (
        <ItemDetailProvider>
            <ItemDetail />
        </ItemDetailProvider>
    )
}
