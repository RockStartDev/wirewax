import SORT_TYPES from '../../../constants/sortTypes';
import {
  GET_GRAPHICS_MARKUP_FETCHING,
  GET_GRAPHICS_MARKUP_SUCCESS,
  GET_GRAPHICS_MARKUP_ERROR,
  SET_PAGE,
  SET_SORT_ORDER,
  SET_SORT_BY,
} from './constants';

const INIT_STATE = {
  data: [],
  page: 1,
  sortBy: 'in_frame',
  sortOrder: SORT_TYPES.ASC,
  pageCount: null,
  error: null,
};

const rootReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_GRAPHICS_MARKUP_SUCCESS:
      const data = action.payload || {};
      return { ...state, ...data, error: null };
    case GET_GRAPHICS_MARKUP_ERROR:
      return { ...state, error: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_SORT_ORDER:
      return { ...state, sortOrder: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case GET_GRAPHICS_MARKUP_FETCHING:
    default:
      return state;
  }
};

export default rootReducer;
