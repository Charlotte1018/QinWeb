import {request, config} from '@/utils';

const {api} = config;
const {permissionAssign, permissionOwn} = api;

// 为某角色分配权限
export function assignPermission(params) {
    return request({
        method: 'post',
        url: permissionAssign,
        data: params
    });
}

// 查看角色下的所有权限
export function getOwnPermission(params) {
    return request({
        method: 'get',
        url: permissionOwn,
        data: params
    });
}
