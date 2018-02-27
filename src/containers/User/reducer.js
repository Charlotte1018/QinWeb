import {config} from '@/utils';
import * as actionTypes from './actionTypes';

const {LOADING, SUCCESS} = config;

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USER_LIST_STARTED: {
            return Object.assign({}, state, {userListStatus: LOADING});
        }
        case actionTypes.FETCH_USER_LIST_SUCCESS: {
            return Object.assign({}, state, {
                userListStatus: SUCCESS,
                total: action.result.data.total,
                userListData: action.result.data.data
            });
        }
        default: {
            return state;
        }
    }
}
