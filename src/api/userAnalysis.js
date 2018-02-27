import {request, config} from '../utils/index';

const {api} = config;
const {regTotal, regList} = api;

// 注册统计总数
export function getRegTotal(params) {
    return request({
        method: 'get',
        url: regTotal,
        data: params
    });
}

// 注册统计列表
export function getRegList(params) {
    return request({
        method: 'get',
        url: regList,
        data: params
    });
}
