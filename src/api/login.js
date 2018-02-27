import {request, config} from '@/utils';

const {api} = config;
const {signIn} = api;

// 登录
export function login(params) {
    return request({
        method: 'post',
        url: signIn,
        data: params
    });
}
