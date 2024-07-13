import { StaticImageData } from 'next/image';

// категория
export interface CategoryProps {
  name: string;
  route: string;
  image: StaticImageData;
  category?: string;
}

// продукт
export interface ProductProps {
  id: number;
  route: string;
  image_small: StaticImageData;
  image_normal: StaticImageData;
  image_large: StaticImageData;
  image_meta?: string;
  url?: string;
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
