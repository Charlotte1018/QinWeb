import {config} from '@/utils';
import * as actionTypes from './actionTypes';

const {LOADING, SUCCESS, FAILURE} = config;

export default (state = {}, action) => {
    switch (action.type) {
        default: {
            return state;
        }
    }
}
