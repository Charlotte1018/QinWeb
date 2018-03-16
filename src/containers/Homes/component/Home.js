import React from 'react';
import { Menu, Icon, Badge, Button, Tag } from 'antd';
import PropTypes from 'prop-types';
import styles from './Home.less';
import { logo, logout, message, mine, he, complete, draft, contract } from '../svg.js';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
            <div className={styles.home}>
                <div className={styles.bg}>
                    <div className={styles.user}>
                        <div className={styles.content}>
                            <div className={styles.userInfo}>
                                <div style={{ display: 'flex',width:'300px',justifyContent:'space-around' }}>
                                    <div >
                                        <div className={styles.avatar}>
                                        </div>
                                    </div>
                                    <div className={styles.name}>
                                        <span className={styles.h1}>风清扬</span>
                                        <span className={styles.tag}>GDCA</span>
                                        <h2>账号：（+86）18811715625</h2>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '300px' }}>
                                        <span style={{ flex: '5', fontSize: '16px' }}>账户余额：¥99.00</span>
                                        <Button style={{ flex: '1' }} className={styles.button} type="danger">充值</Button>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', marginTop: '20px', width: '300px' }}>
                                        <span style={{ flex: '5', fontSize: '16px' }}>签名图章：</span>
                                        <Button style={{ flex: '1' }} >修改</Button>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.userOp}>
                                <div className={styles.row} style={{ width: '400px', height: '100px' }}>
                                    <div className={styles.row} style={{ flex: '1' }}>
                                        <img src={mine}></img>
                                        <div style={{ marginTop: '30px' }} className={styles.column}>
                                            <span>待我签署</span>
                                            <h1 style={{ fontSize: '36px', width: '50px', height: '50px' }}>2</h1>
                                        </div>
                                    </div>
                                    <div className={styles.row} style={{ flex: '1' }}>
                                        <img src={he} style={{ marginLeft: '7px' }}></img>
                                        <div style={{ marginTop: '30px' }} className={styles.column}>
                                            <span>待他人签署</span>
                                            <h1 style={{ fontSize: '36px', width: '50px', height: '50px' }}>4</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.row} style={{ width: '400px' }}>
                                    <div className={styles.row} style={{ flex: '1' }}>
                                        <img src={complete} ></img>
                                        <div style={{ marginTop: '30px' }} className={styles.column}>
                                            <span>已完成</span>
                                            <h1 style={{ fontSize: '36px', width: '50px', height: '50px' }}>66</h1>
                                        </div>
                                    </div>
                                    <div className={styles.row} style={{ flex: '1' }}>
                                        <img src={draft}></img>
                                        <div style={{ marginTop: '30px' }} className={styles.column}>
                                            <span>草稿箱</span>
                                            <h1 style={{ fontSize: '36px', width: '50px', height: '50px' }}>0</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.userSign}>
                                <img src={contract} ></img>
                                <Button className={styles.button}>发起新签名</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.user}>
                
                </div> */}
            </div >
        );
    }
}

export default Home;
