import axios from "axios";
import { useItemDetail } from "../context/useItemDetail";
import { CurrentItem } from "../types/reducerTypes";
import { itemDetailAction } from "./itemDetailAction";

// este archivo contiene la funcion ItemDetailBusiness el cual nos permitira
// realizar los dispatch de nuestras acciones creadas ademas de realizar funcion con una mayor logica
// o complejidad
export const ItemDetailBusiness = () => {
  const { setCurrentItem, setLoading } = itemDetailAction();

  const { dispatch } = useItemDetail();

  const handleSetCurrentItem = (value: CurrentItem) =>
    dispatch(setCurrentItem(value));

  const getDetail = (id: string) => {
    dispatch(setLoading(true));
    axios
      .get(`http://localhost:8080/api/items/${id}`)
      .then((response) => {
        handleSetCurrentItem(response.data.item);
        dispatch(setLoading(false));
      })
      .catch(() => alert("fallo al traer el detalle"));
  };

  const formatPrice = (curr: string, price: number): string => {
    if (curr !== "") {
      let moneyFormat = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: curr,
      });

      return moneyFormat.format(price);
    }

    return "";
  };

  return {
    handleSetCurrentItem,
    getDetail,
    formatPrice,
  };
};
