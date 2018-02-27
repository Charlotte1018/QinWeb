import React from 'react';
import {Table, Card} from 'antd';
import {PropTypes} from 'prop-types';

const Log = ({loading, item = []}) => {

    const columns = [{
        title: '处理人',
        dataIndex: 'admin_name',
        key: 'admin_name'
    }, {
        title: '操作',
        dataIndex: 'log_content',
        key: 'log_content',
    }, {
        title: '日期',
        dataIndex: 'log_time',
        key: 'log_time',
    }];

    return (
        <div>
            <Card title="操作日志">
                <Table columns={columns} dataSource={item} loading={loading} style={{background: '#fff'}}/>
            </Card>
        </div>
    );
};

Log.propTypes = {
    item: PropTypes.array
};

export default Log;
