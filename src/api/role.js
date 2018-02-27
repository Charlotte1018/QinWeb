import {request, config} from '@/utils';

const {api} = config;
const {roleAdd, roleList, roleUpdate, roleDetail} = api;

// 获取角色列表
export function getRoleList(params) {
    return request({
        method: 'get',
        url: roleList,
        data: params
    });
}

// 添加角色
export function addRole(params) {
    return request({
        method: 'post',
        url: roleAdd,
        data: params
    });
}

// 角色详情
export function getRoleDetail(params) {
    return request({
        method: 'get',
        url: roleDetail,
        data: params
    });
}

// 更新角色
export function updateRole(params) {
    return request({
        method: 'post',
        url: roleUpdate,
        data: params
    });
}


