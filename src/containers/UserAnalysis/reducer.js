import {config, idToKey} from '@/utils';
import * as actionTypes from './actionTypes';

const {LOADING, SUCCESS} = config;

export default (state = {}, action) => {
    switch (action.type) {
        case actionTypes.FETCH_REG_TOTAL_SUCCESS: {
            return Object.assign({}, state, {...action.result.data});
        }
        case actionTypes.FETCH_REG_LIST_STARTED: {
            return Object.assign({}, state, {regListStatus: LOADING});
        }
        case actionTypes.FETCH_REG_LIST_SUCCESS: {
            idToKey(action.result.data, 'date');
            return Object.assign({}, state, {regListStatus: SUCCESS, item: action.result.data});
        }
        default: {
            return state;
        }
    }
}
