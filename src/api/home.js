import {request, config} from '@/utils';

const {api} = config;
const {signOut} = api;

// 退出登录
export function logout(params) {
    return request({
        method: 'get',
        url: signOut,
        data: params
    });
}
