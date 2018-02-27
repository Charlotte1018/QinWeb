
import {request, config} from '@/utils';

const {api} = config;
const {articlePublish} = api;

// 发表文章
export function publishArticle(params) {
    return request({
        method: 'post',
        url: articlePublish,
        data: params
    });
}


