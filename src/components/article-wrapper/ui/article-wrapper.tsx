import { type FC, ReactNode } from 'react';

import styles from './article-wrapper.module.scss';

interface IArticleWrapper {
  className?: string;
  children: ReactNode;
}
const ArticleWrapper: FC<IArticleWrapper> = ({ className, children }) => {
  return (
    <div className={styles.articleWrapper}>
      <article className={`${className} ${styles.articleWrapper__container}`}>
        {children}
      </article>
    </div>
  );
};

export default ArticleWrapper;
