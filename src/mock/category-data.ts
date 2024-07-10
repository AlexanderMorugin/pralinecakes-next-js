import ChocolateImage from '@/assets/images/category/category-chocolate.jpg';
import HoneyImage from '@/assets/images/category/category-honey.jpg';
import StrudelImage from '@/assets/images/category/category-strudel.jpg';
import FruitImage from '@/assets/images/category/category-fruit.jpg';
import BerryImage from '@/assets/images/category/category-berry.jpg';
import SandImage from '@/assets/images/category/category-sand.jpg';
import PuffImage from '@/assets/images/category/category-puff.jpg';
import BisquitImage from '@/assets/images/category/category-bisquit.jpg';
import PoppyImage from '@/assets/images/category/category-poppy.jpg';
import NutImage from '@/assets/images/category/category-nut.jpg';
import CreamImage from '@/assets/images/category/category-cream.jpg';
import YogurtImage from '@/assets/images/category/category-yogurt.jpg';
import SufleImage from '@/assets/images/category/category-sufle.jpg';
import CheeseImage from '@/assets/images/category/category-cheese.jpg';
import {
  CATEGORY_BERRY,
  CATEGORY_BISQUIT,
  CATEGORY_CHEESE,
  CATEGORY_CHOCOLATE,
  CATEGORY_CREAM,
  CATEGORY_FRUIT,
  CATEGORY_HONEY,
  CATEGORY_NUT,
  CATEGORY_POPPY,
  CATEGORY_PUFF,
  CATEGORY_SAND,
  CATEGORY_STRUDEL,
  CATEGORY_SUFLE,
  CATEGORY_YOGURT,
  TYPE_BERRY,
  TYPE_BISQUIT,
  TYPE_CHEESE,
  TYPE_CHOCOLATE,
  TYPE_CREAM,
  TYPE_FRUIT,
  TYPE_HONEY,
  TYPE_NUT,
  TYPE_POPPY,
  TYPE_PUFF,
  TYPE_SAND,
  TYPE_STRUDEL,
  TYPE_SUFLE,
  TYPE_YOGURT,
} from '@/shared/constants/categories';

// массив категорий с названиями и роутами к ним
export const categoryData = [
  { name: CATEGORY_CHOCOLATE, route: TYPE_CHOCOLATE, image: ChocolateImage },
  { name: CATEGORY_HONEY, route: TYPE_HONEY, image: HoneyImage },
  { name: CATEGORY_STRUDEL, route: TYPE_STRUDEL, image: StrudelImage },
  { name: CATEGORY_FRUIT, route: TYPE_FRUIT, image: FruitImage },
  { name: CATEGORY_BERRY, route: TYPE_BERRY, image: BerryImage },
  { name: CATEGORY_BISQUIT, route: TYPE_BISQUIT, image: BisquitImage },
  { name: CATEGORY_SAND, route: TYPE_SAND, image: SandImage },
  { name: CATEGORY_PUFF, route: TYPE_PUFF, image: PuffImage },
  { name: CATEGORY_POPPY, route: TYPE_POPPY, image: PoppyImage },
  { name: CATEGORY_NUT, route: TYPE_NUT, image: NutImage },
  { name: CATEGORY_CREAM, route: TYPE_CREAM, image: CreamImage },
  { name: CATEGORY_YOGURT, route: TYPE_YOGURT, image: YogurtImage },
  { name: CATEGORY_SUFLE, route: TYPE_SUFLE, image: SufleImage },
  { name: CATEGORY_CHEESE, route: TYPE_CHEESE, image: CheeseImage },
];

// категории с названиями и роутами к ним
export const chocolate = {
  name: CATEGORY_CHOCOLATE,
  route: TYPE_CHOCOLATE,
  image: ChocolateImage,
};
export const honey = {
  name: CATEGORY_HONEY,
  route: TYPE_HONEY,
  image: HoneyImage,
};
export const strudel = {
  name: CATEGORY_STRUDEL,
  route: TYPE_STRUDEL,
  image: StrudelImage,
};
export const fruit = {
  name: CATEGORY_FRUIT,
  route: TYPE_FRUIT,
  image: FruitImage,
};
export const berry = {
  name: CATEGORY_BERRY,
  route: TYPE_BERRY,
  image: BerryImage,
};
export const bisquit = {
  name: CATEGORY_BISQUIT,
  route: TYPE_BISQUIT,
  image: BisquitImage,
};
export const sand = { name: CATEGORY_SAND, route: TYPE_SAND, image: SandImage };
export const puff = { name: CATEGORY_PUFF, route: TYPE_PUFF, image: PuffImage };
export const poppy = {
  name: CATEGORY_POPPY,
  route: TYPE_POPPY,
  image: PoppyImage,
};
export const nut = { name: CATEGORY_NUT, route: TYPE_NUT, image: NutImage };
export const cream = {
  name: CATEGORY_CREAM,
  route: TYPE_CREAM,
  image: CreamImage,
};
export const yogurt = {
  name: CATEGORY_YOGURT,
  route: TYPE_YOGURT,
  image: YogurtImage,
};
export const sufle = {
  name: CATEGORY_SUFLE,
  route: TYPE_SUFLE,
  image: SufleImage,
};
export const cheese = {
  name: CATEGORY_CHEESE,
  route: TYPE_CHEESE,
  image: CheeseImage,
};
