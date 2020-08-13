import React from 'react';
import range from 'lodash/range';
import clsx from 'clsx';
import classes from './Pagination.module.scss';

const Pagination = ({ page, pageCount, onPageClick = () => {} }) => {
  const renderPageButton = (pageNumber) => (
    <div
      className={clsx(
        classes.button,
        page === pageNumber && classes.active,
      )}
      key={pageNumber}
      onClick={() => onPageClick(pageNumber)}
    >
      {pageNumber}
    </div>
  );

  const butttons = range(1, pageCount).map(renderPageButton);

  return (
    <div className={classes.container}>
      Pages:
      <div className={classes.buttonContainer}>
        {butttons}
      </div>
    </div>
  );
};

export default Pagination
