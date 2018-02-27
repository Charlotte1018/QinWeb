import React from 'react';
import {Page} from '@/components';
import {Icon} from 'antd';
import styles from './style.less';

export default () => (
    <Page inner={true}>
        <div className={styles.box}>
            <Icon type="frown" className={styles.icon}/>
            <div className={styles.text}>抱歉，你无权访问该页面</div>
        </div>
    </Page>
);
