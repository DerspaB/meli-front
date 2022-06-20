export interface ItemDetailReducer {
  currentItem: CurrentItem;
  loading: boolean;
}

export interface Items {
  id: string;
  title: string;
  prices: Price;
  ubication: string;
  free_shipping: boolean;
  picture: string;
  condition: string;
}

export interface Price {
  currency: string;
  amount: number;
  decimals: number;
}

export interface CurrentItem {
  id: string;
  title: string;
  price: Price;
  picture: string;
  condition: string;
  sold_quantity: number;
  description: string;
}
