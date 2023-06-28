import { useMemo } from 'react';
import { getPagesArray } from '../../../utils/pages';
import classes from './Pagination.module.css';

const Pagination = ({ page, changePage, totalPages, posts }) => {
   const pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);

   if (!posts.length) return null;

   return (
      <div className={classes.page__wrapper}>
         {pagesArray.map((p) => (
            <span
               onClick={() => changePage(p)}
               className={
                  page === p
                     ? [classes.page, classes.page__current].join(' ')
                     : classes.page
               }
               key={p}
            >
               {p}
            </span>
         ))}
      </div>
   );
};

export default Pagination;
