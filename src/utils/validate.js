// 必须字母与数字的组合
export function isValidPass(val) {
    const reg = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    return reg.test(val);
}

// 数字，精确到二位小数的正数
export function isValidNum(val) {
    return /^[0-9]+(.[0-9]{1,2})?$/.test(val);
}

// Email
export function isValidEmail(val) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(val);
}

// 空格
export function isSpace(val) {
    return /^\s*$/.test(val);
}

// 手机号正则 11位 第一位为1，第二位为3 4 5 7 8 后面为数字
export function isValidMobile(val) {
    return /^1(3|4|5|7|8)\d{9}$/.test(val);
}

