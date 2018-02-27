import * as actionTypes from './actionTypes';

export const loading = () => ({type: actionTypes.LOADING});

export const loaded = () => ({type: actionTypes.LOADED});

export const fetchDetailSuccess = result => ({type: actionTypes.FETCH_DETAIL_SUCCESS, result});
