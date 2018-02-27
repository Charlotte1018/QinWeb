import React from 'react';
import {connect} from 'react-redux';
import {Page, NumberCard} from '@/components';
import PropTypes from 'prop-types';
import {Row, Col, Card} from 'antd';
import Chart from './components/Chart';
import List from './components/List';

import * as actions from './actions';

class UserAnalysis extends React.Component {

    toChartArr = (item = []) => {
        let arr = [];

        item.forEach((v) => {
            arr.push([v.date, v.newRegnum]);
        });

        return arr;
    };

    componentDidMount() {
        this.props.fetchRegTotal();
        this.props.fetchRegList();
    }

    render() {

        const {lastRegTotal, thisRegTotal, regTotal, verifyTotal, item, regListStatus} = this.props;

        // props
        const numberCardProps1 = {
            icon: 'team',
            color: '#00F38B',
            number: lastRegTotal,
            title: '昨日注册人数'
        };

        const numberCardProps2 = {
            icon: 'smile',
            color: '#83C7FF',
            number: thisRegTotal,
            title: '本周注册人数'
        };

        const numberCardProps3 = {
            icon: 'eye-o',
            color: '#E589EF',
            number: regTotal,
            title: '累计注册人数'
        };

        const numberCardProps4 = {
            icon: 'compass',
            color: '#FF9194',
            number: verifyTotal,
            title: '累计认证人数'
        };

        const listProps = {
            loading: regListStatus !== 'success',
            dataSource: item
        };

        const chartProps = {
            data: this.toChartArr(item)
        };

        return (
            <Page inner={true}>
                <Card title="注册统计" bordered={false}>
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
                    < Chart {...chartProps}/>
                    <List {...listProps}/>
                </Card>
            </Page>
        );
    }
}

UserAnalysis.propsTypes = {
    lastRegTotal: PropTypes.number,
    thisRegTotal: PropTypes.number,
    regTotal: PropTypes.number,
    verifyTotal: PropTypes.number,
    item: PropTypes.array,
    regListStatus: PropTypes.string
};

// -------------------redux react 绑定--------------------

const mapStateToProps = (state) => {
    const userAnalysis = state.UserAnalysisReducer;

    return {
        lastRegTotal: userAnalysis.lastRegTotal,
        thisRegTotal: userAnalysis.thisRegTotal,
        regTotal: userAnalysis.regTotal,
        verifyTotal: userAnalysis.verifyTotal,
        item: userAnalysis.item,
        regListStatus: userAnalysis.regListStatus
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRegTotal: (params) => {
            dispatch(actions.fetchRegTotal(params));
        },
        fetchRegList: (params) => {
            dispatch(actions.fetchRegList(params));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserAnalysis);
