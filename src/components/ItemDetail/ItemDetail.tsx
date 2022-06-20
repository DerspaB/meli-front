
import { useEffect } from 'react'
import { Card } from '../Card/Card'
import { Detail } from './screens/Detail/Detail'
import { ItemDetailBusiness } from './actions/itemDetailBusiness';
import { useParams } from 'react-router-dom';
import { useItemDetail } from './context/useItemDetail';
import { Loading } from '../Loading/Loading';

export const ItemDetail = () => {

    const { getDetail } = ItemDetailBusiness()

    const { state: { loading } } = useItemDetail()

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            getDetail(id)
        }
    }, [id])

    return (
        <Card padding='32px'>
            {
                loading ? <Loading /> : <Detail />
            }

        </Card>
    )
}
