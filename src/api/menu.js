import {request, config} from '@/utils';

const {api} = config;
const {menusAdd, menusDetail, menusUpdate, menusList, menusDelete} = api;

// 添加菜单
export function addMenus(params) {
    return request({
        method: 'post',
        url: menusAdd,
        data: params
    });
}

// 菜单详情
export function getMenusDetail(params) {
    return request({
        method: 'get',
        url: menusDetail,
        data: params
    });
}

// 编辑菜单
export function updateMenus(params) {
    return request({
        method: 'post',
        url: menusUpdate,
        data: params
    });
}

// 菜单列表
export function getMenusList(params) {
    return request({
        method: 'get',
        url: menusList,
        data: params
    });
}


// 删除菜单
export function deleteMenus(params) {
    return request({
        method: 'get',
        url: menusDelete,
        data: params
    });
}
