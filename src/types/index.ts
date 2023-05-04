export interface IProduct {
  id: number;
  name: string;
  brand: string;
  img: string;
  price: number;
  inStock: boolean;
  quantity: any;
}

export interface ICart {
  cart: IProduct[];
}
export interface ICartState {
  cart: {
    cart: IProduct[];
  };
}
