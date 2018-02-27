import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import List from './components/List';
import Lightbox from 'react-images';
import Modal from './components/Modal';
import {Page} from '@/components';
import {Tabs, Card} from 'antd';
import {config} from '@/utils';

import * as actions from './actions';

const {ERR_OK} = config;

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            userDetail: {},
            lightboxIsOpen: false,
            src: '',
            tabKey: 1,
            currentPage: 1
        };
    }

    modalToggle = () => {
        this.setState((prevState) => ({
            modalVisible: !prevState.modalVisible
        }));
    };

    onTabs = (key) => {
        this.setState({
            tabKey: key
        });
        switch (key) {
            case '1':
                this.props.fetchUserList({perPage: 10});
                break;
            case '2':
                this.props.fetchUserList({status: 2, perPage: 10});
                break;
            case '3':
                this.props.fetchUserList({is_silent: 1, perPage: 10});
                break;
            default:
                break;
        }
    };

    handleOpen = (src = '') => {
        this.setState({
            lightboxIsOpen: !this.state.lightboxIsOpen,
            src
        });
    };

    componentDidMount() {
        this.props.fetchUserList({perPage: 10});
    }

    render() {
        // props
        const {userListData, userListStatus, total} = this.props;

        // state
        const {modalVisible, lightboxIsOpen, src, userDetail, tabKey, currentPage} = this.state;

        const TabPane = Tabs.TabPane;

        // props
        const listProps = {
            openModal: (user_id) => {
                this.props.fetchUserDetail({user_id})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.setState({
                                userDetail: data.data
                            });
                        }
                    });
                this.modalToggle();
            },
            onOpen: (src) => {
                this.handleOpen(src);
            },
            jumpToDetail: (user_id) => {
                this.props.fetchUserDetail({user_id});
            },
            // ...otherProps
            pagination: {
                total,
                pageSize: 10,
                showQuickJumper: true,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                onChange: (page) => {
                    this.setState({
                        currentPage: page
                    });
                    switch (tabKey) {
                        case '1':
                            this.props.fetchUserList({perPage: 10, page});
                            break;
                        case '2':
                            this.props.fetchUserList({status: 2, perPage: 10, page});
                            break;
                        case '3':
                            this.props.fetchUserList({is_silent: 1, perPage: 10, page});
                            break;
                        default:
                            break;
                    }
                }
            },
            rowKey: 'id',
            loading: userListStatus !== 'success',
            dataSource: userListData
        };

        const modalProps = {
            item: userDetail,
            onOK: (values) => {
                // TODO: 提取函数，对象遍历优化
                for (let p in values) {
                    if (!values[p]) {
                        delete values[p];
                    }
                }
                this.props.fetchUpdateUser({user_id: userDetail.user_id, ...values})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.props.fetchUserList({perPage: 10, page: currentPage});
                        }
                    });
                this.modalToggle();
            },
            onCancel: () => {
                this.modalToggle();
            },
            // ...otherProps
            title: '编辑用户',
            visible: modalVisible,
            maskClosable: false,
            cancelText: '取消',
            okText: '保存'
        };

        return (
            <Page inner={true}>
                <Card title='用户管理' bordered={false}>
                    <Tabs defaultActiveKey="1" onChange={this.onTabs}>
                        <TabPane tab="全部用户" key="1">
                            <List {...listProps}/>
                        </TabPane>
                        <TabPane tab="已认证用户" key="2">
                            <List {...listProps}/>
                        </TabPane>
                        <TabPane tab="禁言用户" key="3">
                            <List {...listProps}/>
                        </TabPane>
                    </Tabs>
                    <Modal {...modalProps}/>
                    <Lightbox
                        images={[{src}]}
                        isOpen={lightboxIsOpen}
                        onClose={() => this.handleOpen()}
                    />
                </Card>
            </Page>
        );
    }
}

// -------------------redux react 绑定--------------------

const mapStateToProps = (state) => {
    const User = state.UserReducer;

    return {
        userListStatus: User.userListStatus,
        userListData: User.userListData,
        total: User.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserList: bindActionCreators(actions.fetchUserList, dispatch),
        fetchUserDetail: bindActionCreators(actions.fetchUserDetail, dispatch),
        fetchUpdateUser: bindActionCreators(actions.fetchUpdateUser, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
