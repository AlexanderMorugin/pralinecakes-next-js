import { StaticImageData } from 'next/image';

// категория
export interface CategoryProps {
  name: string;
  description?: string;
  route: string;
  image: StaticImageData;
  image_meta?: string;
  url?: string;
  category?: string;
}

// истории
export interface StoryProps {
  image: StaticImageData;
  title: string;
  text?: string;
  route: string;
}

// продукт
export interface ProductProps {
  id: number;
  route: string;
  image_small: StaticImageData;
  image_normal: StaticImageData;
  image_large: string | StaticImageData;
  image_meta?: string;
  url?: string;
  title: string;
  description: string;
  descriptionSecond?: string;
  descriptionThird?: string;
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
  defrostStorage?: number;
  type?: string[];
  category?: CategoryProps[];
  link?: string;
  story?: StoryProps;
}

