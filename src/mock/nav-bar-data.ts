import CookerIcon from '@/assets/icons/icon-cooker.svg';
import CooperationIcon from '@/assets/icons/icon-cooperation.svg';
import ProductIcon from '@/assets/icons/icon-product.svg';
import DeliveryIcon from '@/assets/icons/icon-delivery.svg';
import ContactIcon from '@/assets/icons/icon-contact.svg';

import Routes from '@/shared/constants/routes';
import {
  PAGE_ABOUT_TITLE,
  PAGE_CONTACTS_TITLE,
  PAGE_COOPERATION_TITLE,
  PAGE_DELIVERY_TITLE,
  PAGE_PRODUCTS_TITLE,
} from '@/shared/constants/pages';

export const navBarData = [
  {
    icon: CookerIcon,
    title: PAGE_ABOUT_TITLE,
    route: Routes.ABOUT,
  },
  {
    icon: ProductIcon,
    title: PAGE_PRODUCTS_TITLE,
    route: Routes.PRODUCTS,
  },
  {
    icon: DeliveryIcon,
    title: PAGE_DELIVERY_TITLE,
    route: Routes.DELIVERY,
  },
  {
    icon: ContactIcon,
    title: PAGE_CONTACTS_TITLE,
    route: Routes.CONTACTS,
  },
  {
    icon: CooperationIcon,
    title: PAGE_COOPERATION_TITLE,
    route: Routes.COOPERATION,
  },
];
