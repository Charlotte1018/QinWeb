import {request, config} from '@/utils';

const {api} = config;
const {articleFavoriteRank, articleReadRank} = api;

// 文章阅读量排名
export function getReadRank(params) {
    return request({
        method: 'get',
        url: articleReadRank,
        data: params
    });
}

// 文章收藏量排名
export function getFavoriteRank(params) {
    return request({
        method: 'get',
        url: articleFavoriteRank,
        data: params
    });
}
