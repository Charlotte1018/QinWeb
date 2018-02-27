import {request, config} from '../utils/index';

const {api} = config;
const {statistics, logs, tasks} = api;

// 总的数据统计接口
export function getStatistics() {
    return request({
        method: 'get',
        url: statistics
    });
}

// 管理员日志
export function getLogsList() {
    return request({
        method: 'get',
        url: logs
    });
}

// 待办事项接口
export function getTasks() {
    return request({
        method: 'get',
        url: tasks
    });
}
