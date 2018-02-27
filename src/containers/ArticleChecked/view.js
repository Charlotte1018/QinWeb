import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Card} from 'antd';
import {Page, Search} from '@/components';
import List from './components/List';

import {config} from '@/utils';

import * as actions from './actions';

const {SUCCESS} = config;

class ArticleChecked extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1
        };
    }

    modalToggle = () => {
        this.setState((prevState) => ({
            modalVisible: !prevState.modalVisible
        }));
    };

    componentDidMount() {
        // this.props.fetchArticleCheckedList({status: 2});
        this.props.fetchArticleCheckedList({perPage: 10});
    }

    render() {

        const {articleCheckedListData = [], articleCheckedListStatus, total} = this.props;

        const {currentPage} = this.state;

        // props
        const listProps = {
            openModal: (index) => {
                // console.log(modalIndex);
                this.setState({
                    modalIndex: index
                });
                // console.log(modalIndex);
                this.modalToggle();
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
                    this.props.fetchArticleCheckedList({perPage: 10, page});
                }
            },
            rowKey: 'id',
            loading: articleCheckedListStatus !== SUCCESS,
            dataSource: articleCheckedListData
        };

        return (
            <Page inner={true}>
                <Card title="已审核文章"
                      extra={<Search/>}
                      bordered={false}>
                    <List {...listProps}/>
                </Card>
            </Page>
        );
    }
}

// -------------------redux react 绑定--------------------

const mapStateToProps = (state) => {
    const ArticleChecked = state.ArticleCheckedReducer;

    return {
        articleCheckedListData: ArticleChecked.articleCheckedListData,
        articleCheckedListStatus: ArticleChecked.articleCheckedListStatus,
        total: ArticleChecked.total
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchArticleCheckedList: bindActionCreators(actions.fetchArticleCheckedList, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleChecked);

