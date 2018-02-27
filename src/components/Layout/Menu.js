import React from 'react';
import PropTypes from 'prop-types';
import {Menu, Icon} from 'antd';
import classnames from 'classnames';
import {Link} from 'react-router';
import styles from './Menu.less';

const Menus = ({menusTree = [], theme, onOpenChange, openKeys, collapsed}) => {
    // 递归生成菜单
    const getMenus = (menusTree) => {
        return menusTree.map((item) => {
            if (item.children.length) {
                return (
                    <Menu.SubMenu
                        key={item.menu_id}
                        title={<span>{item.icon && <Icon type={item.icon}/>}<span>{item.name}</span></span>}>
                        {getMenus(item.children)}
                    </Menu.SubMenu>
                );
            }
            return (
                <Menu.Item key={item.menu_id}>
                    <Link to={item.link || '#'}>
                        {item.icon && <Icon type={item.icon}/>}
                        <span>{item.name}</span>
                    </Link>
                </Menu.Item>
            );
        });
    };

    const menuItems = getMenus(menusTree);

    return (
        <Menu className={classnames(styles.menu)}
              mode="inline"
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              theme={theme}
              inlineCollapsed={collapsed}
              style={!collapsed ? {width: "200px"} : {width: "80px", textAlign: 'center'}}>
            {menuItems}
        </Menu>
    );
};

Menus.propTypes = {
    menusTree: PropTypes.array,
    theme: PropTypes.string,
    collapsed: PropTypes.bool,
    openKeys: PropTypes.array,
    onOpenChange: PropTypes.func
};

export default Menus;
