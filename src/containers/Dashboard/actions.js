import * as actionTypes from './actionTypes';

import {getStatistics, getLogsList, getTasks} from '@/api/dashboard';

export const fetchStatisticsSuccess = result => ({type: actionTypes.FETCH_STATISTICS_SUCCESS, result});

export const fetchLogsListStarted = () => ({type: actionTypes.FETCH_LOGS_LIST_STARTED});

export const fetchLogsListSuccess = result => ({type: actionTypes.FETCH_LOGS_LIST_SUCCESS, result});

export const fetchTasksSuccess = result => ({type: actionTypes.FETCH_TASKS_SUCCESS, result});

export const fetchStatistics = params => dispatch => {
    return getStatistics(params).then(data => dispatch(fetchStatisticsSuccess(data)));
}

export const fetchLogsList = params => dispatch => {
    dispatch(fetchLogsListStarted());
    return getLogsList(params).then(data => dispatch(fetchLogsListSuccess(data)));
};

export const fetchTasks = params => dispatch => {
    return getTasks(params).then(data => dispatch(fetchTasksSuccess(data)));
}
