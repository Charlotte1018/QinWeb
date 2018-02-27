import {request, config} from '@/utils';

const {api} = config;
const {categoryAdd, categoryUpdate, categoryList, categoryDetail} = api;

// 添加分类
export function addCategory(params) {
    return request({
        method: 'post',
        url: categoryAdd,
        data: params
    });
}

// 分类详情
export function getCategoryDetail(params) {
    return request({
        method: 'get',
        url: categoryDetail,
        data: params
    });
}

// 更新分类
export function updateCategory(params) {
    return request({
        method: 'post',
        url: categoryUpdate,
        data: params
    });
}

// 分类列表
export function getCategoryList(params) {
    return request({
        method: 'get',
        url: categoryList,
        data: params
    });
}

