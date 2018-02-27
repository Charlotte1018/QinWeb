import {request, config} from '@/utils';

const {api} = config;
const {navAdd, navUpdate, navDetail, navList, navDelete} = api;

// 添加导航
export function addNav(params) {
    return request({
        method: 'post',
        url: navAdd,
        data: params
    });
}

// 更新导航
export function updateNav(params) {
    return request({
        method: 'post',
        url: navUpdate,
        data: params
    });
}

// 导航列表
export function getNavList(params) {
    return request({
        method: 'get',
        url: navList,
        data: params
    });
}

// 删除导航
export function deleteNav(params) {
    return request({
        method: 'post',
        url: navDelete,
        data: params
    });
}

// 导航详情
export function getNavDetail(params) {
    return request({
        method: 'get',
        url: navDetail,
        data: params
    });
}
