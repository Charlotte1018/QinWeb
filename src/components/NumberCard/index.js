import React from 'react';
import {Icon, Card} from 'antd';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

import styles from './style.less';

const NumberCard = ({icon, title, color, number, countUp}) => (
    <Card className={styles.numberCard} bordered={false} bodyStyle={{padding: 0}}>
        <Icon className={styles.iconWarp} style={{color}} type={icon}/>
        <div className={styles.content}>
            <p className={styles.title}>{title || 'No Title'}</p>
            <p className={styles.number}>
                <CountUp
                    start={0}
                    end={number}
                    duration={2.75}
                    useEasing
                    useGrouping
                    separator=","
                    {...countUp || {}}
                />
            </p>
        </div>
    </Card>
);

NumberCard.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    number: PropTypes.number,
    countUp: PropTypes.object
};

export default NumberCard;
