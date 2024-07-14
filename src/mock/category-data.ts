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
  DESCRIPTION_BERRY,
  DESCRIPTION_BISQUIT,
  DESCRIPTION_CHEESE,
  DESCRIPTION_CHOCOLATE,
  DESCRIPTION_CREAM,
  DESCRIPTION_FRUIT,
  DESCRIPTION_HONEY,
  DESCRIPTION_NUT,
  DESCRIPTION_POPPY,
  DESCRIPTION_PUFF,
  DESCRIPTION_SAND,
  DESCRIPTION_STRUDEL,
  DESCRIPTION_SUFLE,
  DESCRIPTION_YOGURT,
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
  {
    name: CATEGORY_CHOCOLATE,
    description: DESCRIPTION_CHOCOLATE,
    route: TYPE_CHOCOLATE,
    image: ChocolateImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-praga-m.ca22d406.jpeg',
    url: 'https://pralinecakes.ru/categories/chocolate/',
  },
  {
    name: CATEGORY_HONEY,
    description: DESCRIPTION_HONEY,
    route: TYPE_HONEY,
    image: HoneyImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-djanduya-m.6760435e.jpeg',
    url: 'https://pralinecakes.ru/categories/honey/',
  },
  {
    name: CATEGORY_STRUDEL,
    description: DESCRIPTION_STRUDEL,
    route: TYPE_STRUDEL,
    image: StrudelImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-cherry-strudel-m.707a20d8.jpeg',
    url: 'https://pralinecakes.ru/categories/strudel/',
  },
  {
    name: CATEGORY_FRUIT,
    description: DESCRIPTION_FRUIT,
    route: TYPE_FRUIT,
    image: FruitImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-kiwi-basket-m.96311492.jpeg',
    url: 'https://pralinecakes.ru/categories/fruit/',
  },
  {
    name: CATEGORY_BERRY,
    description: DESCRIPTION_BERRY,
    route: TYPE_BERRY,
    image: BerryImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-raspberry-basket-m.99fabc24.jpeg',
    url: 'https://pralinecakes.ru/categories/berry/',
  },
  {
    name: CATEGORY_BISQUIT,
    description: DESCRIPTION_BISQUIT,
    route: TYPE_BISQUIT,
    image: BisquitImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-smetannik-m.1a8b0367.jpeg',
    url: 'https://pralinecakes.ru/categories/bisquit/',
  },
  {
    name: CATEGORY_SAND,
    description: DESCRIPTION_SAND,
    route: TYPE_SAND,
    image: SandImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-estaerhazi-m.7ee537b5.jpeg',
    url: 'https://pralinecakes.ru/categories/sand/',
  },
  {
    name: CATEGORY_PUFF,
    description: DESCRIPTION_PUFF,
    route: TYPE_PUFF,
    image: PuffImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-napoleon-m.c916590e.jpeg',
    url: 'https://pralinecakes.ru/categories/puff/',
  },
  {
    name: CATEGORY_POPPY,
    description: DESCRIPTION_POPPY,
    route: TYPE_POPPY,
    image: PoppyImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-makovoe-m.98ea6ca9.jpeg',
    url: 'https://pralinecakes.ru/categories/poppy/',
  },
  {
    name: CATEGORY_NUT,
    description: DESCRIPTION_NUT,
    route: TYPE_NUT,
    image: NutImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-vozdushno-m.83cbbf1b.jpeg',
    url: 'https://pralinecakes.ru/categories/nut/',
  },
  {
    name: CATEGORY_CREAM,
    description: DESCRIPTION_CREAM,
    route: TYPE_CREAM,
    image: CreamImage,
    image_meta: 'https://pralinecakes.ru/products/pastry/krasniy-barhat/',
    url: 'https://pralinecakes.ru/categories/cream/',
  },
  {
    name: CATEGORY_YOGURT,
    description: DESCRIPTION_YOGURT,
    route: TYPE_YOGURT,
    image: YogurtImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-cheesecake-blue-m.7294de1b.jpeg',
    url: 'https://pralinecakes.ru/categories/yogurt/',
  },
  {
    name: CATEGORY_SUFLE,
    description: DESCRIPTION_SUFLE,
    route: TYPE_SUFLE,
    image: SufleImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-fantasia-m.b0512059.jpeg',
    url: 'https://pralinecakes.ru/categories/sufle/',
  },
  {
    name: CATEGORY_CHEESE,
    description: DESCRIPTION_CHEESE,
    route: TYPE_CHEESE,
    image: CheeseImage,
    image_meta:
      'https://pralinecakes.ru/_next/static/media/pastry-cheesecake-m.c50a2ad5.jpeg',
    url: 'https://pralinecakes.ru/categories/cheese/',
  },
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
export const sand = {
  name: CATEGORY_SAND,
  route: TYPE_SAND,
  image: SandImage,
};
export const puff = {
  name: CATEGORY_PUFF,
  route: TYPE_PUFF,
  image: PuffImage,
};
export const poppy = {
  name: CATEGORY_POPPY,
  route: TYPE_POPPY,
  image: PoppyImage,
};
export const nut = {
  name: CATEGORY_NUT,
  route: TYPE_NUT,
  image: NutImage,
};
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
