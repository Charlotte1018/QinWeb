import React from 'react';
import styles from './Todo.less';
import CountUp from 'react-countup';
import PropTypes from 'prop-types';

const Todo = ({title, number, text, countUp, bg}) => {
    return (
        <div className={styles.todo} style={{background: bg}}>
            <p className={styles.title}>{title || 'No Title'}</p>
            <p className={styles.number}>
                <span>{text}</span>
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
    );
};

Todo.propTypes = {
    title: PropTypes.string,
    number: PropTypes.number,
    text: PropTypes.string,
    bg: PropTypes.string,
    countUp: PropTypes.object
};

export default Todo;
