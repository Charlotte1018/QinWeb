import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Tabs, Checkbox } from 'antd';
import { Page } from '@/components';
import styles from './styles.less';
import { eid, eidH, haveCA, haveCAH, noCA, noCAH } from './svg.js';

//表单组件
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class RegisterSuccessForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const { loading } = this.state;

        const pageProps = { loading };

        return (
            <Page {...pageProps}>
                <div className={styles.success}>
                    <div style={{ textAlign: 'center' }}>
                        <Icon style={{ color: '#10C786', fontSize: '40px' }} type="check-circle" />
                        <div>
                            <h1 style={{ fontSize: '30px', marginTop: '20px' }}>恭喜，您已完成账号注册</h1>
                        </div>
                        <div>
                            <h1 style={{ fontSize: '16px', color: '#8E8E8E' }}>您需要完成企业认证，才可以使用电子签名功能。</h1>
                            <h1 style={{ fontSize: '16px', color: '#8E8E8E' }}>现在完成企业认证，开始体验电子签名的便捷吧！</h1>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', }}>
                            <div className={styles.card} style={{ marginRight: '40px' }}>
                                <img width='100px' height='100px' style={{ marginTop: '50px' }} src={haveCAH} ></img>
                                <div>
                                    <Button size="large" type="primary" ghost style={{ marginTop: '50px', height: '35px' }}>
                                        我已有CA证书
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <img width='100px' height='100px' style={{ marginTop: '50px' }} src={noCAH}></img>
                                <div>
                                    <Button size="large" type="primary" ghost style={{ marginTop: '50px', height: '35px' }}>
                                        我没有CA证书
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: '30px', fontSize: '16px' }}>
                                <a style={{ color: '#10C786' }}>跳过认证，直接进入主页</a>
                            </div>
                            <div style={{ marginTop: '20px', fontSize: '16px' }}>
                                <a style={{ color: '#B8B8B8' }}>什么是CA证书？</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Page>
        )
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 500);
    }
}

const RegisterSuccess = Form.create()(RegisterSuccessForm);

export default RegisterSuccess;