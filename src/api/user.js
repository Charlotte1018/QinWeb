import {request, config} from '@/utils';

const {api} = config;
const {userList, userDetail, userUpdate, userLogs} = api;

// 用户列表
export function getUserList(params) {
    return request({
        method: 'get',
        url: userList,
        data: params
    });
}

// 用户详情
export function getUserDetail(params) {
    return request({
        method: 'get',
        url: userDetail,
        data: params
    });
}

// 用户编辑
export function updateUser(params) {
    return request({
        method: 'post',
        url: userUpdate,
        data: params
    });
}

// 用户登录日志列表
export function getUserLogs(params) {
    return request({
        method: 'get',
        url: userLogs,
        data: params
    });
}
