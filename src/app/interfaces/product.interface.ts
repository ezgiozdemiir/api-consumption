//For Local Requests
export interface BaseProduct {
    id: number;
    title: string;
    color?: string | string[];
  }
  
  export interface StandardProduct extends BaseProduct {
    price: number | string;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
  export interface ExtendedProduct extends BaseProduct {
    modelYear: number;
  }

  export type Product = StandardProduct | ExtendedProduct;

  //For API Requests
  export interface ProductAPI{
    id: number,
    title: string,
    price: string | number,
    category: string,
    description: string,
    image: string
}