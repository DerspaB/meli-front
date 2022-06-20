// En este archivo se crean las diferentes interfaces para los estados de nuestro reducer

export interface PreviewItemReducer {
  items: Items[];
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
