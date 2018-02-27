import * as actionTypes from './actionTypes';
import {getRegTotal, getRegList} from '@/api/userAnalysis';

export const fetchRegTotalSuccess = (result) => ({type: actionTypes.FETCH_REG_TOTAL_SUCCESS, result});

export const fetchRegListStarted = () => ({type: actionTypes.FETCH_REG_LIST_STARTED});

export const fetchRegListSuccess = (result) => ({type: actionTypes.FETCH_REG_LIST_SUCCESS, result});

export const fetchRegTotal = (params) => {
    return (dispatch) => {
        getRegTotal(params).then(data => dispatch(fetchRegTotalSuccess(data)));
    };
};

export const fetchRegList = (params) => {
    return (dispatch) => {
        dispatch(fetchRegListStarted());
        getRegList(params).then(data => dispatch(fetchRegListSuccess(data)));
    };
};
