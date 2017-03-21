import { createStore, combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SEARCH_ITEM } from '../constants/actionConst';

const initialSearchSelectedItems = {
    selectedItems: [],
};

const store = createStore(reducer);

       
const selectedItems = handleActions({
  [SEARCH_ITEM]: (state = initialSearchSelectedItems, action) => {
    return action.payload.filter((item) => {
        return item.name.indexOf(text) > -1;
    });
  },
}, []);

export default combineReducers({
  selectedItems,
});