import React from 'react';
import {eventProxy} from '@/utils';
import {Link} from 'react-router';
import {config} from '@/utils';
import Menus from './Menu';
// import data from './data';

import styles from './Sider.less';
import SwitchTheme from './SwitchTheme';

class Sider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            collapsed: false,
            switchThemeDisplay: 'flex',
            openKeys: [],
            rootSubmenuKeys: ['21', '25', '29', '36', '41', '46', '55']
        };
    }

    // 点击菜单，收起其他展开的所有菜单
    onOpenChange = (openKeys) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };

    componentDidMount() {
        // 监听 toggleCollapsed 事件
        eventProxy.on('toggleCollapsed', () => {
            this.setState({
                collapsed: !this.state.collapsed,
                switchThemeDisplay: this.state.collapsed ? 'flex' : 'none'
            });
        });
    }

    render() {
        const {theme, openKeys, collapsed, switchThemeDisplay} = this.state;

        const {menusTree} = this.props;

        const switchThemeProps = {
            switchThemeDisplay,
            changeTheme: () => {
                this.setState((prevState) => ({
                    theme: prevState.theme === 'light' ? 'dark' : 'light'
                }));
            },
            theme
        };

        const menusProps = {
            menusTree,
            theme,
            openKeys,
            onOpenChange: this.onOpenChange,
            collapsed
        };

        return (
            <div className={styles.sider}>
                <div className={!collapsed ? styles.logoWrapper: styles.logoSmallWrapper}>
                    <Link to="/">
                        {!collapsed ? <img src={config.logo} alt="logo"/> : <img src={config.logo_small} alt="logo"/>}
                    </Link>
                </div>
                <Menus {...menusProps} />
                <div>
                    <SwitchTheme {...switchThemeProps}/>
                </div>
            </div>
        );
    }
}

export default Sider;
