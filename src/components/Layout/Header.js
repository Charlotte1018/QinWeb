import React from 'react';
import {Menu, Icon} from 'antd';
import PropTypes from 'prop-types';
import {eventProxy, getRandomQuote} from '@/utils';

import styles from './Header.less';


const SubMenu = Menu.SubMenu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    signOut() {
        this.props.signOut();
    }

    // 发布 toggleCollapsed 事件
    toggleCollapsed() {
        eventProxy.trigger('toggleCollapsed');
        this.setState((prevState) => ({
            collapsed: !prevState.collapsed
        }));
        this.props.toggleMarginLeft();
    }

    render() {
        const {collapsed} = this.state;

        const {name} = this.props;

        return (
            <div className={styles.header}>
                <div>
                    <div className={styles.iconButton} onClick={this.toggleCollapsed.bind(this)}>
                        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
                    </div>
                    {/* <span className="f12 ml20 dib">{getRandomQuote()}</span> */}
                </div>
                <div>
                    <Menu mode="horizontal" className="fr" onClick={this.signOut.bind(this)}>
                        <SubMenu className="f12" title={<span><Icon type="user"/>{name}</span>}>
                            <Menu.Item key="logout">
                                退出登录
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                    {/*<div className={classnames(styles.iconButton, 'fr', 'rel')}>*/}
                    {/*<Icon className="f14" type="bell"/>*/}
                    {/*<Badge className={styles.badge} count={66}/>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    toggleMarginLeft: PropTypes.func,
    signOut: PropTypes.func,
    username: PropTypes.string
};

export default Header;
