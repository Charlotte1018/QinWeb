import React from 'react';
import {Table} from 'antd';
import {Link} from 'react-router';
import {config} from '@/utils';

const {tableScrollX} = config;

const List = ({
    jumpToDetail,
    ...tableProps
}) => {

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: '推荐人',
            dataIndex: 'recommend_admin',
            key: 'recommend_admin'
        },
        {
            title: '作者',
            dataIndex: 'author',
            key: 'author'
        },
        {
            title: '文章',
            dataIndex: 'title',
            key: 'title',render: (text, record) => <span><Link to={`article-checked/article/${record.id}`}>{text}</Link></span>
        },
        {
            title: '分类',
            dataIndex: 'sort_id',
            key: 'sort_id'
        },
        {
            title: '来源',
            dataIndex: 'channel_id',
            key: 'channel_id'
        },
        {
            title: '链接',
            dataIndex: 'link',
            key: 'link'
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: '阅读量',
            dataIndex: 'read_num',
            key: 'read_num'
        },
        {
            title: '收藏量',
            dataIndex: 'store_num',
            key: 'store_num'
        },
        {
            title: '编辑', dataIndex: 'edit',
            key: 'edit',
            render: (text, record) => <span><Link to={`article-update/${record.id}`}>编辑</Link></span>
        },
    ];

    return (
        <div>
            <Table
                columns={columns}
                {...tableProps}
                scroll={{x: tableScrollX}}
                expandedRowRender = {
                    record => <p style={{
                            margin: 0
                        }}>{`推荐时间：${record.recommend_time}; 审核时间：${record.add_time}; 摘要：${record.brief}; `}</p>
                }
            />
        </div>
    );
}

List.propTypes = {};

export default List;
