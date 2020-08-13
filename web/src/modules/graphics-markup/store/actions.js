import GraphicsMarkupService from '../../../services/GraphicsMarkupService';
import {
  GET_GRAPHICS_MARKUP_FETCHING,
  GET_GRAPHICS_MARKUP_SUCCESS,
  GET_GRAPHICS_MARKUP_ERROR,
  SET_PAGE,
  SET_SORT_BY,
  SET_SORT_ORDER,
} from './constants';

const getGraphicsMarkupFetching = () => ({
  type: GET_GRAPHICS_MARKUP_FETCHING,
});

const getGraphicsMarkupSuccess = (payload) => ({
  type: GET_GRAPHICS_MARKUP_SUCCESS,
  payload
});

const getGraphicsMarkupError = (payload) => ({
  type: GET_GRAPHICS_MARKUP_ERROR,
  payload
});

export const getGraphicsMarkup = (options = {}) => (dispatch) => {
  dispatch(getGraphicsMarkupFetching());

  return GraphicsMarkupService.getAll(options)
    .then((res) => {
      dispatch(getGraphicsMarkupSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getGraphicsMarkupError(error));
    });
};

export const setPage = (page) => ({
  type: SET_PAGE,
  payload: page,
});

export const setSortBy = (sortBy) => ({
  type: SET_SORT_BY,
  payload: sortBy,
});

export const setSortOrder = (sortOrder) => ({
  type: SET_SORT_ORDER,
  payload: sortOrder,
});
