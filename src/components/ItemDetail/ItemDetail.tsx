import './styles.css'

export const ItemDetail = () => {
    return (
        <>
            <div className="itemDetailContainer">
                <div className="imageContainer">
                    <img
                        src="https://http2.mlstatic.com/D_NQ_NP_606189-MCO49963305245_052022-V.webp"
                        alt="item"
                    />
                </div>
                <div className="info">
                    <div className='info-status'>
                        Nuevo - 234 vendidos
                    </div>
                    <div className='info-title'>
                        Deco Reverse Sombrero Oxford
                    </div>
                    <div className='info-price'>
                        $ 1.980
                    </div>
                    <button>
                        Comprar
                    </button>
                </div>

            </div>
            <div className='item-description'>
                <span>Descripción del producto</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium ullamcorper massa, vitae imperdiet magna molestie tincidunt. Morbi egestas ut metus in aliquet. Donec cursus lacus eu metus hendrerit congue. Suspendisse elementum augue ut sodales blandit. Integer suscipit sapien sed nunc suscipit, vitae pharetra magna bibendum. Ut eu euismod erat. Nullam fermentum consectetur libero quis mollis. Donec malesuada vitae libero auctor placerat. Curabitur semper eros vel eros interdum pulvinar. Integer quis lorem luctus, interdum ligula in, pretium lacus. Vivamus tristique mauris et arcu rhoncus luctus. Aliquam ornare dolor id nisi aliquam hendrerit.
                </p>
            </div>
        </>

    )
}
