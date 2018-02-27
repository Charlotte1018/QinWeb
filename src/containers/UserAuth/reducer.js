import {config} from '@/utils';
import * as actionTypes from './actionTypes';

const {LOADING, SUCCESS} = config;

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_AUTH_USER_LIST_START: {
            return Object.assign({}, state, {userAuthListStatus: LOADING});
        }
        case actionTypes.FETCH_AUTH_USER_LIST_SUCCESS: {
            return Object.assign({}, state, {
                userAuthListStatus: SUCCESS,
                total: action.result.data.total,
                userAuthListData: action.result.data.data
            });
        }
        default: {
            return state;
        }
    }
}
