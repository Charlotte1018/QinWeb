import Cookies from 'js-cookie';

// cookies remove time
// 单位为一天（24h）
// const expires = 2 / 24;

export default {

    // Read cookie:
    getToken() {
        return Cookies.get('auth-token');
    },

    // Default: Cookie is removed when the user closes the browser.
    setToken(token) {
        // return Cookies.set('auth-token', token, {expires});
        return Cookies.set('auth-token', token);
    },

    // Delete cookie:
    removeToken() {
        return Cookies.remove('auth-token');
    }
};
