import { FILTER_CATEGORIES } from '../actions/index';
import { FETCH_PRODUCTS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return [action.payload.data];
    case FILTER_CATEGORIES:
      return [action.payload.data];
    default: 
      return state;
  } 
}
