import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Page} from '@/components';
import {Tabs, Card} from 'antd';
import {List, AuthModal, FailModal} from './components';
import {config} from '@/utils';

import * as actions from './actions';

const TabPane = Tabs.TabPane;
const {ERR_OK} = config;

class UserAuthentication extends React.Component {

    constructor() {
        super();
        this.state = {
            authModalVisible: false,
            failModalVisible: false,
            userDetail: {},
            tabKey: 1,
            currentPage: 1
        };
    }

    onTabs = (key) => {
        this.setState({
            tabKey: key
        });
        switch (key) {
            case '1':
                this.props.fetchAuthUserList({status: 1, perPage: 10});
                break;
            case '2':
                this.props.fetchAuthUserList({status: 2, perPage: 10});
                break;
            case '3':
                this.props.fetchAuthUserList({status: 3, perPage: 10});
                break;
            default:
                break;
        }
    };

    modalToggle = (modalVisible) => {
        this.setState((prevState) => ({
            [modalVisible]: !prevState[modalVisible]
        }));
    };

    componentDidMount () {
        this.props.fetchAuthUserList({status: 1, perPage: 10});
    }

    render() {

        const {userDetail, authModalVisible, failModalVisible, tabKey, currentPage} = this.state;

        const {userAuthListData, userAuthListStatus, total} = this.props;

        // props
        const listProps = {
            onAuth: (user_id) => {
                this.props.fetchAuthUserDetail({user_id})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.setState({
                                userDetail: data.data
                            });
                        }
                    });
                this.modalToggle('authModalVisible');
            },
            onFail: (user_id) => {
                this.props.fetchAuthUserDetail({user_id})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.setState({
                                userDetail: data.data
                            });
                        }
                    });
                this.modalToggle('failModalVisible');
            },
            onOpen: (src) => {
                this.handleOpen(src);
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
                            this.props.fetchAuthUserList({status: 1, perPage: 10, page});
                            break;
                        case '2':
                            this.props.fetchAuthUserList({status: 2, perPage: 10, page});
                            break;
                        case '3':
                            this.props.fetchAuthUserList({status: 3, perPage: 10, page});
                            break;
                        default:
                            break;
                    }
                }
            },
            rowKey: 'id',
            loading: userAuthListStatus !== 'success',
            dataSource: userAuthListData
        };

        const authModalProps = {
            item: userDetail,
            onOK: (values) => {
                // TODO: 提取函数，对象遍历优化
                for (let p in values) {
                    if (!values[p]) {
                        delete values[p];
                    }
                }
                this.props.fetchAuthUpdate({user_id: userDetail.user_id, ...values})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.props.fetchAuthUserList({status: 1, perPage: 10, page: currentPage});
                        }
                    });
                this.modalToggle('authModalVisible');
            },
            onCancel: () => {
                this.modalToggle('authModalVisible');
            },
            // ...otherProps
            title: '用户认证',
            visible: authModalVisible,
            maskClosable: false,
            cancelText: '取消',
            okText: '确定'
        };

        const failModalProps = {
            item: userDetail,
            onOK: (values) => {
                // TODO: 提取函数，对象遍历优化
                for (let p in values) {
                    if (!values[p]) {
                        delete values[p];
                    }
                }
                this.props.fetchAuthUpdate({user_id: userDetail.user_id, ...values})
                    .then(res => {
                        const data = res.result;
                        if (data.error === ERR_OK) {
                            this.props.fetchAuthUserList({status: 1});
                        }
                    });
                this.modalToggle('failModalVisible');
            },
            onCancel: () => {
                this.modalToggle('failModalVisible');
            },
            // ...otherProps
            title: '退回原因',
            visible: failModalVisible,
            maskClosable: false,
            cancelText: '取消',
            okText: '确定'
        };

        return (
            <Page inner={true}>
                <Card title='认证管理' bordered={false}>
                    <Tabs defaultActiveKey="1" onChange={this.onTabs}>
                        <TabPane tab="待认证" key="1">
                            <List {...listProps}/>
                        </TabPane>
                        <TabPane tab="已认证" key="2">
                            <List {...listProps}/>
                        </TabPane>
                        <TabPane tab="已退回" key="3">
                            <List {...listProps}/>
                        </TabPane>
                    </Tabs>
                    <AuthModal {...authModalProps}/>
                    <FailModal {...failModalProps} />
                </Card>
            </Page>
        );
    }
}

// -------------------redux react 绑定--------------------

const mapStateToProps = (state) => {
    const UserAuth = state.UserAuthReducer;

    return {
        userAuthListStatus: UserAuth.userAuthListStatus,
        userAuthListData: UserAuth.userAuthListData,
        total: UserAuth.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAuthUserList: bindActionCreators(actions.fetchAuthUserList, dispatch),
        fetchAuthUserDetail: bindActionCreators(actions.fetchAuthUserDetail, dispatch),
        fetchAuthUpdate: bindActionCreators(actions.fetchAuthUpdate, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAuthentication);
