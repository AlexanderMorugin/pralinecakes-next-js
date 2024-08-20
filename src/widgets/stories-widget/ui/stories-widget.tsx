import Link from 'next/link';
import type { FC } from 'react';

const StoriesWidget: FC = () => {
  return (
    <section>
      <Link href='/stories/ptichie-moloko/'>
        История происхождения торта и конфет &quot;Птичье молоко&quot;
      </Link>
    </section>
  );
};

export default StoriesWidget;
