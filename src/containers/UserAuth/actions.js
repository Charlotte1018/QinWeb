import {getUserList, getUserDetail, updateUser} from '@/api/user';
import * as actionTypes from './actionTypes';
import {actions as rootActions} from '@/store';

export const fetchAuthUserListStarted = () => ({type: actionTypes.FETCH_AUTH_USER_LIST_START});

export const fetchAuthUserListSuccess = result => ({type: actionTypes.FETCH_AUTH_USER_LIST_SUCCESS, result});

export const fetchAuthUserDetailSuccess = result => ({type: actionTypes.FETCH_AUTH_USER_DETAIL_SUCCESS, result});

export const fetchAuthUpdateSuccess = result => ({type: actionTypes.FETCH_AUTH_UPDATE_SUCCESS, result});

export const fetchAuthUserList = params => dispatch => {
    dispatch(fetchAuthUserListStarted());
    return getUserList(params).then(data => dispatch(fetchAuthUserListSuccess(data)));
};

export const fetchAuthUserDetail = params => dispatch => {
    dispatch(rootActions.loaded());
    return getUserDetail(params).then(data => {
        dispatch(rootActions.loaded());
        return dispatch(fetchAuthUserDetailSuccess(data));
    });
};

export const fetchAuthUpdate = params => dispatch => {
    return updateUser(params).then(data => dispatch(fetchAuthUpdateSuccess(data)));
};
