import ProductIcon from '@/assets/icons/icon-product.svg';
import PastryIcon from '@/assets/icons/icon-pastry.svg';
import CakesIcon from '@/assets/icons/icon-cakes.svg';
import CategoryIcon from '@/assets/icons/icon-categories.svg';
import PriceListIcon from '@/assets/icons/icon-price-list.svg';
import Routes from '@/shared/constants/routes';
import {
  PAGE_CAKES_TITLE,
  PAGE_CATEGORIES_TITLE,
  PAGE_PASTRY_TITLE,
  PAGE_PRICE_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';

export const footerCatalogData = [
  {
    icon: ProductIcon,
    title: PAGE_PRODUCTS_TITLE,
    route: Routes.PRODUCTS,
  },
  {
    icon: PastryIcon,
    title: PAGE_PASTRY_TITLE,
    route: Routes.PASTRY,
  },
  {
    icon: CakesIcon,
    title: PAGE_CAKES_TITLE,
    route: Routes.CAKES,
  },
  {
    icon: CategoryIcon,
    title: PAGE_CATEGORIES_TITLE,
    route: Routes.CATEGORIES,
  },
  {
    icon: PriceListIcon,
    title: PAGE_PRICE_TITLE,
    route: Routes.PRICELIST,
  },
];
