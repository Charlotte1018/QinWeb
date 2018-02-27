import {request, config} from '@/utils';

const {api} = config;
const {userRecommendRank, userReadRank, userFavoriteRank} = api;

// 推荐量排行
export function getRecommendRank(params) {
    return request({
        method: 'get',
        url: userRecommendRank,
        data: params
    });
}

// 被阅读量排行
export function getReadRank(params) {
    return request({
        method: 'get',
        url: userReadRank,
        data: params
    });
}

// 被收藏量排行
export function getFavoriteRank(params) {
    return request({
        method: 'get',
        url: userFavoriteRank,
        data: params
    });
}
