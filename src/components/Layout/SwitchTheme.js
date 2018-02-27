import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Icon} from 'antd';
import classnames from 'classnames';

import styles from './SwitchTheme.less';

class SwitchTheme extends React.Component {

    render() {
        const {switchThemeDisplay, changeTheme, theme} = this.props;

        return (
            <div className={classnames(styles.container, {[styles.dark]: theme === 'dark'})}
                 style={{display: switchThemeDisplay}}>
                <div><Icon type="bulb"/><span className="pl5 f12">Switch Theme</span></div>
                <Switch
                    onChange={changeTheme}
                />
            </div>
        );
    }
}

SwitchTheme.propTypes = {
    switchThemeDisplay: PropTypes.string,
    changeTheme: PropTypes.func,
    theme: PropTypes.string
};

export default SwitchTheme;
