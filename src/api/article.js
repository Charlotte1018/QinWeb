import {request, config} from '@/utils';

const {api} = config;
const {articleAdd, articleDetail, articleList, articleUpdate} = api;

// 获取文章列表
export function getArticleList(params) {
    return request({
        method: 'get',
        url: articleList,
        data: params
    });
}

// 添加文章
export function addArticle(params) {
    return request({
        method: 'post',
        url: articleAdd,
        data: params
    });
}

// 文章详情
export function getArticleDetail(params) {
    return request({
        method: 'get',
        url: articleDetail,
        data: params
    });
}

// 更新文章
export function updateArticle(params) {
    return request({
        method: 'post',
        url: articleUpdate,
        data: params
    });
}

