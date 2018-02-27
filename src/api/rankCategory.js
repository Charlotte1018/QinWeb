import {request, config} from '@/utils';

const {api} = config;
const {categoryRecommendRank, categoryReadRank, categoryFavoriteRank} = api;

// 分类推荐量排名
export function getRecommendRank(params) {
    return request({
        method: 'get',
        url: categoryRecommendRank,
        data: params
    });
}

// 分类阅读量排名
export function getReadRank(params) {
    return request({
        method: 'get',
        url: categoryReadRank,
        data: params
    });
}

// 分类收藏量排行
export function getFavoriteRank(params) {
    return request({
        method: 'get',
        url: categoryFavoriteRank,
        data: params
    });
}
