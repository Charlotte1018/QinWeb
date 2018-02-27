import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumb, Icon} from 'antd';
import styles from './Bread.less';

class Bread extends React.Component {

    render() {

        const {location} = this.props;

        return (
            <div className={styles.bread}>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Dashboard</Breadcrumb.Item>
                    <Breadcrumb.Item>{location}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

Bread.propTyeps = {
    location: PropTypes.string
};

export default Bread;
