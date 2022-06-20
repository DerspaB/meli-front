import React, { useEffect } from 'react'
import { Card } from '../Card/Card'
import { Item } from './screens/Item/Item'
import { usePreviewItem } from './context/usePreviewItem';
import { useSearchParams } from 'react-router-dom';
import { PreviewItemsBusiness } from './actions/previewItemsBusiness';
import { Loading } from '../Loading/Loading';

export const PreviewItem = () => {

    const { getItems } = PreviewItemsBusiness()
    const [params] = useSearchParams()
    const { state: { items, loading } } = usePreviewItem()


    useEffect(() => {
        if (params.get('search')) {
            getItems(params.get('search') || '')
        }
    }, [params])

    return (
        <Card padding='16px'>
            {
                loading ? <Loading /> : <>{
                    items.slice(0, 4).map((item) => (
                        <Item key={item.id} item={item} />
                    ))
                }</>
            }

        </Card>
    )
}
