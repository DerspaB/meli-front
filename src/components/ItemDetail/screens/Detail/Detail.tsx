import './styles.css'
import { useItemDetail } from '../../context/useItemDetail';
import { PreviewItemsBusiness } from '../../../PreviewItem/actions/previewItemsBusiness';

export const Detail = () => {

    // se crea el componente visual del detalle el cual mostrara el detalle
    // del producto seleccionado


    const { formatPrice } = PreviewItemsBusiness()
    //aca obtenemos de nuestro hook el estado que estamos manteniendo por modulo
    // y asi accedemos al currenItem
    const { state: { currentItem } } = useItemDetail()

    return (
        <>
            <div className="itemDetailContainer">
                <div className="imageContainerDetail">
                    <img
                        src={currentItem.picture}
                        alt="item detail"
                    />
                </div>
                <div className="info">
                    <div className='info-status'>
                        {`${currentItem.condition} - ${currentItem.sold_quantity} vendidos`}
                    </div>
                    <div className='info-title'>
                        {currentItem.title}
                    </div>
                    <div className='info-price'>
                        $ {formatPrice("ARS", currentItem.price.amount).split('ARS')[1]}
                    </div>
                    <button>
                        Comprar
                    </button>
                </div>

            </div>
            <div className='item-description'>
                <span>Descripción del producto</span>
                <p>
                    {currentItem.description}
                </p>
            </div>
        </>

    )
}
