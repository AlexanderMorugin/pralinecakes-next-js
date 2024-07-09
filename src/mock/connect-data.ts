import WhatsAppIcon from '@/assets/icons/icon-whatsapp.svg';
import PhoneIcon from '@/assets/icons/icon-phone.svg';
import { PHONE_LINK, PHONE_NUMBER, WHATSAPP_LINK } from '@/shared/constants/info';

export const connectData = [
  {
    title: 'Телефон',
    icon: PhoneIcon,
    link: PHONE_LINK,
    text: PHONE_NUMBER,
  },
  {
    title: 'WhatsApp',
    icon: WhatsAppIcon,
    link: WHATSAPP_LINK,
    text: 'WhatsApp',
  },
];
