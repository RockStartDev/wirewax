import { combineReducers } from 'redux';
import graphicsMarkupReducer from '../modules/graphics-markup/store/reducer';


export default function createRootReducer() {
  return combineReducers({
    graphics: graphicsMarkupReducer,
  });
}
