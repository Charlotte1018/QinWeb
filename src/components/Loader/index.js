import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './style.less';

class Loader extends React.Component {
    render() {
        const {spinning, fullScreen} = this.props;
        return (
            <div className={classnames(styles.loader, {
                [styles.hidden]: !spinning,
                [styles.fullScreen]: fullScreen
            })}>
                <div className={styles.wrapper}>
                    <div className={styles.inner}/>
                    <div className={styles.text}>LOADING</div>
                </div>
            </div>
        );
    }
}

/**
 * spinning {boolean} :
 * fullScreen {boolean} :
 */

Loader.propTypes = {
    spinning: PropTypes.bool,
    fullScreen: PropTypes.bool
};

export default Loader;
