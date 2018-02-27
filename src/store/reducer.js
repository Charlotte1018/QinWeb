import {LOADED, LOADING, FETCH_DETAIL_SUCCESS} from './actionTypes';

export function loaded(state = false, action = {}) {
    switch (action.type) {
        case LOADED:
            return true;

        case LOADING:
            return false;

        default:
            return state;
    }
}

export function loading(state = false, action = {}) {
    switch (action.type) {
        case LOADED:
            return false;

        case LOADING:
            return true;

        default:
            return state;
    }
}

export function detail(state = {}, action) {
    switch (action.type) {
        case FETCH_DETAIL_SUCCESS:
            return Object.assign({}, action.result.data);
        default:
            return state;
    }
}
