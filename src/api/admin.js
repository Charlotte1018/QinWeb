import {request, config} from '@/utils';

const {api} = config;
const {adminList, adminAdd, addminFreeze, adminUpdate, adminDetail} = api;

// 获取管理员列表
export function getAdminList(params) {
    return request({
        method: 'get',
        url: adminList,
        data: params
    });
}

// 添加管理员
export function addAdmin(params) {
    return request({
        method: 'post',
        url: adminAdd,
        data: params
    });
}

// 管理员详情
export function getAdminDetail(params) {
    return request({
        method: 'get',
        url: adminDetail,
        data: params
    });
}

// 编辑管理员
export function updateAdmin(params) {
    return request({
        method: 'post',
        url: adminUpdate,
        data: params
    });
}

// 冻结管理员
export function freezeAdmin(params) {
    return request({
        method: 'post',
        url: addminFreeze,
        data: params
    });
}


