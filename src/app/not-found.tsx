import type { Metadata } from 'next';

import { NotFoundWidget } from '@/widgets';

export const metadata: Metadata = {
  title: '404 - Страница не найдена',
  description:
    'К сожалению, запрашиваемая Вами страница не найдена. Пожалуйста, перейдите в существующий раздел',
};

export default function NotFound() {
  return <NotFoundWidget />;
}
