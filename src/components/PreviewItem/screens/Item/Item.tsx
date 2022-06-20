import { useNavigate } from "react-router-dom";
import { PreviewItemsBusiness } from "../../actions/previewItemsBusiness";
import { Items } from "../../types/reducerTypes";
import "./styles.css";

export interface ItemProps {
  item: Items
}


// este componente muestra los atributos del item el cual es encontrado en la busqueda inical
export const Item = ({ item }: ItemProps) => {

  // se hace llamado del useNavigate ya que esta funcion nos permite poder
  // navegar a otra ruta y en este caso añadirle un parametro por url
  const navigate = useNavigate()


  const handleClick = () => navigate(`../items/${item.id}`)

  const { formatPrice } = PreviewItemsBusiness()


  return (
    <div className="itemContainer" onClick={handleClick}>
      <div className="imageContainer">
        <img
          src={item.picture}
          alt="item"
        />
      </div>
      <div className="info">
        <div className="info-header">
          <span className="price">$ {formatPrice(item.prices.currency, item.prices.amount).split('ARS')[1]}</span>
          {item.free_shipping && <img src="./assets/ic_shipping.png" alt="carro" />}
        </div>

        <div className="info-title">
          {item.title}
        </div>
      </div>
      <div className="ubication">{item.ubication}</div>
    </div>
  );
};
