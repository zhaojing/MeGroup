import { createAction, combineActions } from 'redux-actions';
import * as ACTION_CONST from '../constants/actionConstants';

const SearchItem = createAction(ACTION_CONST.SESRCH_ITEM);

export function searchMerchant(searchKey) {
    return (dispatch, getState) => {
        const allItems = getState().allItems;
        dispatch(SearchItem(allItems, searchKey));
    };
}

const search = combineActions(
  ACTION_CONST.SEARCH_ITEM,
);