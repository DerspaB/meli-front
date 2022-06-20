import axios from "axios";
import { usePreviewItem } from "../context/usePreviewItem";
import { Items } from "../types/reducerTypes";
import { previewItemsAction } from "./previewItemsAction";

// este archivo contiene la funcion PreviewItemsBusiness el cual nos permitira
// realizar los dispatch de nuestras acciones creadas ademas de realizar funcion con una mayor logica
// o complejidad
export const PreviewItemsBusiness = () => {
  const { setItems, setLoading } = previewItemsAction();

  const { dispatch } = usePreviewItem();
  const handleSetItems = (value: Items[]) => dispatch(setItems(value));

  const getItems = (search: string) => {
    dispatch(setLoading(true));
    axios
      .get(`http://localhost:8080/api/items?q=${search}`)
      .then((response) => {
        handleSetItems(response.data.items);
        dispatch(setLoading(false));
      })
      .catch(() => alert("fallo al obtener items"));
  };

  const formatPrice = (curr: string, price: number): string => {
    let moneyFormat = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: curr,
    });

    return moneyFormat.format(price);
  };

  return {
    handleSetItems,
    getItems,
    formatPrice,
  };
};
