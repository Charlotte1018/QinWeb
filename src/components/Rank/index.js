import React from 'react';
import {Tabs, DatePicker} from 'antd';
import moment from 'moment';
import List from './List';
import PropTypes from 'prop-types';

const RangePicker = DatePicker.RangePicker;

class Rank extends React.Component {

    render() {
        const TabPane = Tabs.TabPane;

        const {tab} = this.props;

        return (
            <div>
                <Tabs defaultActiveKey="0" tabBarExtraContent={<RangePicker
                    ranges={{Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')]}}
                    showTime
                />}>
                    {
                        tab.map((tab, index) => (
                            <TabPane tab={tab} key={index}>
                                <List/>
                            </TabPane>
                        ))
                    }
                </Tabs>
            </div>
        );
    }
}

Rank.propTypes = {
    tab: PropTypes.array.isRequired
};

export default Rank;
