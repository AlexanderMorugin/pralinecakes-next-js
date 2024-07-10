// категория
export interface CategoryProps {
  name: string;
  route: string;
  image: string;
  category?: string;
}

// продукт
export interface ProductProps {
  id: number;
  route: string;
  image_small: string;
  image_normal: string;
  image_large: string;
  title: string;
  description: string;
  condition?: string;
  ingredients: string;
  protein: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  quantity: number;
  quantity_b?: number;
  weight: number;
  weight_b?: number;
  price: number;
  price_b?: number;
  rating: number;
  type?: string[];
  category?: CategoryProps[];
}
