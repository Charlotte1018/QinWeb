import 'whatwg-fetch';
import 'es6-promise';
import cookie from './cookie';
import store from 'store';
import {notification, message} from 'antd';
import {hashHistory} from 'react-router';

const {getToken, removeToken} = cookie;

const codeMessage = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。'
};

// 1. 检查http状态码，fetch在状态码不正常时，不会reject，所以要自行检查
// 服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    notification.error({message: `请求错误 ${response.status}: ${response.url}`, description: errortext});
    // 抛出错误，handleError接收
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
}

// 2. 返回json格式
// response.json()会帮助你运行一次JSON.parse(response.text())
// json方法源码。
//    this.json = function() {
//      return this.text().then(JSON.parse)
//    }
export function parseJSON(response) {
    return response.json();
}

// const errorCodeMessage = {
//     100001: '该管理员不存在',
//     100002: '该账户已被冻结,不能登录',
//     100003: '登录失败,请检查用户名或者密码是否正确',
//     100132: '发生未知错误'
// };

// 3. 处理后端错误码
export function handleErrorCode(res) {
    if (res.error === 100002 || res.error === 30008) {
        removeToken(); // 删除token
        store.clearAll(); // 清空localStorage
        hashHistory.push('/login');
    } else if (res.error !== 0) {
        message.error(res.data);
    }
    // const errortext = errorCodeMessage[res.error];
    // switch (res.error) {
    //     case 100001:
    //         message.error(errortext);
    //         break;
    //     case 30008:
    //         removeToken(); // 删除token
    //         store.clearAll(); // 清空localStorage
    //         hashHistory.push('/login');
    //         break;
    //     case 100132:
    //         message.error(errortext);
    //         break;
    //     case 100003:
    //         message.error(errortext);
    //         break;
    //     default:
    //         break;
    // }
    return res;
}

// 4. 处理catch（第一步抛出的）
export function handleError(err) {
    const status = err.name;
    if (status === 401) {
        hashHistory.push('/404');
        return;
    }
    if (status === 403) {
        hashHistory.push('/403');
        return;
    }
    if (status <= 504 && status >= 500) {
        hashHistory.push('/500');
        return;
    }
    if (status >= 404 && status < 422) {
        hashHistory.push('/404');
    }
}


// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj) {
    if (obj == null) return;
    const esc = encodeURIComponent;
    return Object
        .keys(obj)
        .map(k => esc(k) + '=' + esc(obj[k]))
        .join('&');
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} method 请求方法 get or post
 * @param  {string} rul 请求url
 * @param  {object} data 请求参数
 * @return {object}
 */
export default function request ({method, url, data}) {
    // TODO: 请求超时处理
    if (/get/i.test(method)) {
        return fetch(data ? url + `?${obj2params(data)}` : url, {
            // Fetch 请求默认是不带 cookie 的，需要设置 fetch(url, {credentials: 'include'})
            // credentials: 'include', TODO: fetch开启cookie出错
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'auth-token': getToken()
            }
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(handleErrorCode)
            .catch(handleError);
    } else if (/post/i.test(method)) {
        return fetch(url, {
            method: 'POST',
            // credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/x-www-form-urlencoded',
                'auth-token': getToken()
            },
            body: obj2params(data)
        })
            .then(checkStatus)
            .then(parseJSON)
            .then(handleErrorCode)
            .catch(handleError);
    }
}
