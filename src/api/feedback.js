import {request, config} from '@/utils';

const {api} = config;
const {feedbackList, feedbackHandle} = api;

// 反馈列表
export function getFeedbackList(params) {
    return request({
        method: 'get',
        url: feedbackList,
        data: params
    });
}

// 处理反馈
export function handleFeedback(params) {
    return request({
        method: 'post',
        url: feedbackHandle,
        data: params
    });
}



