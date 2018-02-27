import {request, config} from '@/utils';

const {api} = config;
const {permissionAdd, permissionList, permissionDelete, permissionUpdate} = api;

// 添加权限
export function addPermission(params) {
    return request({
        method: 'post',
        url: permissionAdd,
        data: params
    });
}

// 获取权限列表
export function getPermissionList(params) {
    return request({
        method: 'get',
        url: permissionList,
        data: params
    });
}

// 删除权限
export function deletePermission(params) {
    return request({
        method: 'get',
        url: permissionDelete,
        data: params
    });
}

// 更新权限
export function updatePermission(params) {
    return request({
        method: 'post',
        url: permissionUpdate,
        data: params
    });
}
