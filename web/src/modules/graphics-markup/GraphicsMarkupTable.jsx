import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Pagination from '../../components/Pagination/Pagination';
import SORT_TYPES from '../../constants/sortTypes';
import {
  getGraphicsMarkup,
  setPage,
  setSortBy,
  setSortOrder,
} from './store/actions';
import classes from './GraphicsMarkupTable.module.scss';

const GraphicsMarkupTable = ({
  data,
  page,
  pageCount,
  sortOrder,
  sortBy,
  getGraphicsMarkup,
  setPage,
  setSortBy,
  setSortOrder,
}) => {
  useEffect(() => {
    const options = {
      page,
      sortOrder,
      sortBy,
    };

    getGraphicsMarkup(options);
  }, [page, sortOrder, sortBy]);

  const renderItem = ({ in_frame, out_frame, content }) => (
    <tr key={content.sample_frame}>
      <th>{ in_frame }</th>
      <th>{ out_frame }</th>
      <th>{ content.value.join(', ') }</th>
      <th>{ content.labels.join(', ') }</th>
      <th>{ content.location.join(', ') }</th>
    </tr>
  );

  const renderRows = useCallback(() => {
    return data.map(renderItem);
  }, [data, page]);

  const onHeaderClick = (field) => {
    console.log('test 1', field);
    console.log('test 2', sortOrder);
    setSortBy(field);
    setSortOrder(sortOrder === SORT_TYPES.ASC ? SORT_TYPES.DESC : SORT_TYPES.ASC);
  };

  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
        <tr>
          <th onClick={() => onHeaderClick('in_frame')}>in_frame</th>
          <th onClick={() => onHeaderClick('out_frame')}>out_frame</th>
          <th>value</th>
          <th>labels</th>
          <th>locations</th>
        </tr>
        </thead>
        <tbody>
        { renderRows() }
        </tbody>
      </table>
      <Pagination
        page={page}
        pageCount={pageCount}
        onPageClick={setPage}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.graphics.data,
  page: state.graphics.page,
  sortBy: state.graphics.sortBy,
  sortOrder: state.graphics.sortOrder,
  pageCount: state.graphics.pageCount,
});

const mapDispatchToProps = (dispatch) => ({
  getGraphicsMarkup: (options) => dispatch(getGraphicsMarkup(options)),
  setPage: (page) => dispatch(setPage(page)),
  setSortBy: (sortBy) => dispatch(setSortBy(sortBy)),
  setSortOrder: (sortOrder) => dispatch(setSortOrder(sortOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps) (GraphicsMarkupTable);
