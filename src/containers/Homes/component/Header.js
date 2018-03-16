import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import PropTypes from 'prop-types';
import styles from './Header.less';
import { logo, logout, message } from '../svg.js';


const SubMenu = Menu.SubMenu;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            count:12
        };
    }
    render() {
        const { collapsed, count} = this.state;

        return (
            <div className={styles.header}>
                <div className={styles.left}>
                    <img className={styles.maring10} src={logo} alt="logo" style={{ width: '80px', height: '30px' }}></img>
                    <a className={styles.maring10}>首页</a>
                    <a className={styles.maring10}>文件管理</a>
                    <a className={styles.maring10}>个人中心</a>
                </div>
                <div className={styles.right}>
                    <Badge className={styles.maring50} count={count}>
                        <img src={message} style={{ width: '25px', height: '25px',marginTop:'5px' }}></img>
                    </Badge>
                    <img className={styles.maring50} src={logout} style={{ width: '25px', height: '25px' }}></img>
                </div>
            </div>
        );
    }
}

export default Header;
