import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {NumberCard} from '@/components';
import {Row, Col, Card, BackTop} from 'antd';
import {Log, Todo} from './components';

import * as actions from './actions';

class Dashboard extends React.Component {

    componentDidMount() {
        this.props.fetchStatistics();
        this.props.fetchLogsList();
        this.props.fetchTasks();
    }

    render() {

        const {
            reg_num,
            recommend_num,
            read_num,
            visit_num,
            item,
            logsStatus,
            article_verify_num,
            user_verify_num,
            feedback_num
        } = this.props;

        // props
        const numberCardProps1 = {
            icon: 'team',
            color: '#00F38B',
            number: reg_num,
            title: '累计注册人数'
        };

        const numberCardProps2 = {
            icon: 'smile',
            color: '#83C7FF',
            number: recommend_num,
            title: '文章推荐总数'
        };

        const numberCardProps3 = {
            icon: 'eye-o',
            color: '#E589EF',
            number: read_num,
            title: '文章阅读总量'
        };

        const numberCardProps4 = {
            icon: 'compass',
            color: '#FF9194',
            number: visit_num,
            title: '站点访问量'
        };

        const TodoProps1 = {
            title: '内容审核',
            text: '待审核文章',
            number: article_verify_num,
            bg: '#83C7FF'
        };

        const TodoProps2 = {
            title: '用户管理',
            text: '需认证用户',
            number: user_verify_num,
            bg: '#E589EF'
        };

        const TodoProps3 = {
            title: '反馈信息',
            text: '需处理反馈',
            number: feedback_num,
            bg: '#00F38B'
        };

        const logProps = {
            item,
            loading: logsStatus !== 'success'
        };

        return (
            <div>
                <Row gutter={12}>
                    <Col xl={6} lg={12}>
                        <NumberCard {...numberCardProps1}/>
                    </Col>
                    <Col xl={6} lg={12}>
                        <NumberCard {...numberCardProps2}/>
                    </Col>
                    <Col xl={6} lg={12}>
                        <NumberCard {...numberCardProps3}/>
                    </Col>
                    <Col xl={6} lg={12}>
                        <NumberCard {...numberCardProps4}/>
                    </Col>
                </Row>
                <Card title={'待处理任务'}>
                    <Row gutter={12} type={'flex'} justify={'space-around'}>
                        <Col xl={6} lg={12}>
                            <Todo {...TodoProps1}/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <Todo {...TodoProps2}/>
                        </Col>
                        <Col xl={6} lg={12}>
                            <Todo {...TodoProps3}/>
                        </Col>
                    </Row>
                </Card>
                <div className="mt20">
                    <Log {...logProps}/>
                </div>
                <BackTop/>
            </div>
        );
    }
}

Dashboard.propTypes = {
    reg_num: PropTypes.number,
    recommend_num: PropTypes.number,
    read_num: PropTypes.number,
    visit_num: PropTypes.number,
    item: PropTypes.array,
    logsStatus: PropTypes.string,
    article_verify_num: PropTypes.number,
    user_verify_num: PropTypes.number,
    feedback_num: PropTypes.number
};


// -------------------redux react 绑定--------------------

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchStatistics: bindActionCreators(actions.fetchStatistics, dispatch),
        fetchLogsList: bindActionCreators(actions.fetchLogsList, dispatch),
        fetchTasks: bindActionCreators(actions.fetchTasks, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
