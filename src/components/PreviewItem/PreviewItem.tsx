import "./styles.css";

export const PreviewItem = () => {
  return (
    <div className="itemContainer">
      <div className="imageContainer">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_606189-MCO49963305245_052022-V.webp"
          alt="item"
        />
      </div>
      <div className="info">
        <div className="info-header">
          <span className="price">$ 1.980</span>
          <img src="./assets/ic_shipping.png" alt="carro" />
        </div>

        <div className="info-title">
          Apple Ipod Touch 5g 16gb Negro igual a Nuevo Completo Unico!
        </div>
      </div>
      <div className="ubication">Capital Federal</div>
    </div>
  );
};
