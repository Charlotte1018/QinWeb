import React from 'react';
import {Table} from 'antd';
import PropTypes from 'prop-types';

const List = ({...tableProps}) => {
    const columns = [
        {
            title: '时间',
            dataIndex: 'date',
            key: 'date'
        },
        {
            title: '新增注册人数',
            dataIndex: 'newRegnum',
            key: 'newRegnum'
        },
        {
            title: '新认证人数',
            dataIndex: 'newVerifyNum',
            key: 'newVerifyNum'
        },
        {
            title: '累计注册人数',
            dataIndex: 'regTotal',
            key: 'regTotal'
        },
        {
            title: '累计认证人数',
            dataIndex: 'verifyTotal',
            key: 'verifyTotal'
        }
    ];

    return (
        <div>
            <Table columns={columns} {...tableProps}/>
        </div>
    );
};

List.propTypes = {};

export default List;
