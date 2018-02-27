import config from './config';
import eventProxy from './eventProxy';
import request from './request';
import cookie from './cookie';
import permissionKey from './permissionKey';

// js深拷贝
export const deepClone = (obj) => {
    if (typeof obj !== "object") {
        return obj;
    }

    var newObj = obj.constructor === Array
        ? []
        : {}; //开辟一块新的内存空间

    for (var i in obj) {
        newObj[i] = deepClone(obj[i]); //通过递归实现深层的复制
    }

    return newObj;
}

// 递归为数组加一个key值，值为id
export const idToKey = (function f(dataTree, id) {
    return dataTree.map((item) => {
        return item.children
            ? {
                key: item[id],
                ...item,
                children: (() => {
                    return f(item.children, id)
                })()
            }
            : {
                key: item[id],
                ...item
            };
    });
});

// treeSelect
export const keyTokey = (function f(dataTree, keyA, keyB) {
    return dataTree.map((item) => {
        return item.children
            ? {
                [keyA]: item[keyB].toString(),
                ...item,
                children: (() => {
                    return f(item.children, keyA, keyB)
                })()
            }
            : {
                [keyA]: item[keyB].toString(),
                ...item
            };
    });
});

// 手机号正则 11位 第一位为1，第二位为3 4 5 7 8 后面为数字
export function isValidMobile(val) {
    return /^1(3|4|5|7|8)\d{9}$/.test(val);
}

// 数组中是否存在某项
export function hasValue(arr, value) {
    return arr.indexOf(value) !== -1;
}

// 将时间戳转换为日期
function add0(m) {
    return m < 10
        ? '0' + m
        : m;
}

export function formatDate(timeStamp) {
    timeStamp = timeStamp * 1000;
    let time = new Date(timeStamp);
    let y = time.getFullYear();
    let m = time.getMonth() + 1;
    let d = time.getDate();
    let h = time.getHours();
    let mm = time.getMinutes();
    // let s = time.getSeconds();

    return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm);
}

export function getRandomQuote() {
    let rand = Math.floor(Math.random() * 10 + 1); //产生一个随机数(1-10)
    let quotes = [];
    quotes[1] = '语录1' //这里分配十句随机出现的文本
    quotes[2] = '语录2'
    quotes[3] = '语录3'
    quotes[4] = '语录4'
    quotes[5] = '语录5'
    quotes[6] = '语录6'
    quotes[7] = '语录7'
    quotes[8] = '语录8'
    quotes[9] = '语录9'
    quotes[10] = '语录10'
    return quotes[rand] //由随机数选择一句话
}

export {config, eventProxy, request, cookie, permissionKey};
