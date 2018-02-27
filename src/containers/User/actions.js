import {getUserList, getUserDetail, updateUser, getUserLogs} from '@/api/user';
import * as actionTypes from './actionTypes';
import {actions as rootActions} from '@/store';

export const fetchUserListStarted = () => ({type: actionTypes.FETCH_USER_LIST_STARTED});

export const fetchUserListSuccess = result => ({type: actionTypes.FETCH_USER_LIST_SUCCESS, result});

export const fetchUpdateUserSuccess = result => ({type: actionTypes.FETCH_UPDATE_USER_SUCCESS, result});

export const fetchUserList = params => dispatch => {
    dispatch(fetchUserListStarted());
    return getUserList(params).then(data => dispatch(fetchUserListSuccess(data)));
};

export const fetchUserDetail = params => dispatch => {
    dispatch(rootActions.loading());
    return getUserDetail(params).then(data => {
        dispatch(rootActions.loaded());
        return dispatch(rootActions.fetchDetailSuccess(data));
    });
}

export const fetchUpdateUser = params => dispatch => {
    return updateUser(params).then(data => dispatch(fetchUpdateUserSuccess(data)));
}
