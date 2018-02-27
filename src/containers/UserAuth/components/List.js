import React from 'react';
import {Table, Divider} from 'antd';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const List = ({onAuth, onFail, onOpen, ...tableProps}) => {

    const columns = [
        {
            title: '头像',
            dataIndex: 'head_img',
            key: 'head_img',
            width: 64,
            render: text => <img alt={'avatar'} width={24} src={text} style={{borderRadius: '50%'}}/>
        },
        {
            title: '用户名',
            dataIndex: 'username',
            key: 'username',
            render: (text, record) => <Link to={`user/${record.user_id}`}>{text}</Link>
        },
        {
            title: 'ID',
            dataIndex: 'user_id',
            key: 'user_id'
        },
        {
            title: '手机号',
            dataIndex: 'phone',
            key: 'phone'
        },
        {
            title: '公众号',
            dataIndex: 'with_wechat',
            key: 'with_wechat',
            render: (text) => (
                <span>
                    {text === 1 ? '已绑定' : '未绑定'}
                </span>
            )
        },
        {
            title: '认证信息',
            dataIndex: 'auth_type',
            key: 'auth_type'
        },
        {
            title: '认证材料',
            dataIndex: 'identity',
            key: 'identity',
            render: (text, record, index) => (
                <span className="color-primary poi" onClick={() => {
                    onOpen(text);
                }}>
                    {text}
                </span>
            )
        },
        {
            title: '认证审核',
            dataIndex: 'edit',
            key: 'edit',
            render: (text, record, index) => (
                <div>
                    <span style={{cursor: 'pointer'}}
                        onClick={() => {
                            onAuth(record.user_id);
                        }}
                        className="color-primary">
                            认证
                    </span>
                     <Divider type="vertical" />
                    <span style={{cursor: 'pointer'}}
                        onClick={() => {
                            onFail(record.user_id);
                        }}
                        className="color-primary">
                            退回
                    </span>
                </div>
            )
        }
    ];

    return (
        <Table
            {...tableProps}
            columns={columns}/>
    );
};

List.propTypes = {
    openModal: PropTypes.func,
    onOpen: PropTypes.func,
    lightboxIsOpen: PropTypes.bool,
    src: PropTypes.string
};

export default List;
