import {config} from '@/utils';
import * as actionTypes from './actionTypes';

const {LOADING, SUCCESS} = config;

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLE_CHECKED_LIST_STARTED: {
            return Object.assign({}, state, {articleCheckedListStatus: LOADING});
        }
        case actionTypes.FETCH_ARTICLE_CHECKED_LIST_SUCCESS: {
            return Object.assign({}, state, {
                articleCheckedListStatus: SUCCESS
            }, {
                total: action.result.data.total,
                articleCheckedListData: action.result.data.data
            });
        }
        default: {
            return state;
        }
    }
}
