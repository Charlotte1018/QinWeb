import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Tabs, Checkbox, Radio, Menu, Dropdown } from 'antd';
import { Page } from '@/components';
import styles from './styles.less';
import { phone, pc, pcH, phoneH, qrcode } from './svg.js'

//表单组件
const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class CertificateRequestForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            value: 1,
            step: 2
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value
        });
    }
    nextStep = () => {
        this.setState({
            step: 2
        });
    }

    render() {

        const { getFieldDecorator } = this.props.form;

        const { loading, step } = this.state;

        const pageProps = { loading };

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank">1st menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">2nd menu item</a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank">3rd menu item</a>
                </Menu.Item>
            </Menu>
        );
        return (
            <Page {...pageProps}>
                {
                    step === 1 && <div className={styles.certificateRequest}>
                        <div style={{ textAlign: 'center' }}>
                            <div>
                                <h1 style={{ fontSize: '30px' }}>证书申请</h1>
                                <h1 style={{ fontSize: '16px', color: '#8E8E8E', marginTop: '10px' }}>选择证书类型</h1>
                            </div>
                            <div className={styles.card} style={{ borderBottom: '1px solid transparent' }}>
                                <div className={styles.middle}>
                                    <h1 style={{ marginTop: '50px' }} className={styles.f16}>您是否拥有<span style={{ color: '#10C786' }}>eID?</span></h1>
                                    <h1 style={{ marginTop: '10px', color: '#8E8E8E' }} className={styles.f14}>(有eID并且使用有NFC功能的安卓手机或有eID读卡器的用户可选择该项)</h1>
                                    <div style={{ marginTop: '10px' }}>
                                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                                            <Radio value={1}>有</Radio>
                                            <Radio style={{ marginLeft: '40px' }} value={2}>无</Radio>
                                        </RadioGroup>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.card}>
                                <div style={{ marginTop: '50px' }}>
                                    <h1 style={{ marginTop: '20px' }} className={styles.f16}>选择您希望申请证书的CA公司</h1>
                                    <h1 style={{ marginTop: '10px', color: '#8E8E8E' }} className={styles.f14}>(您可以根据所处的地区选择您想申请的CA公司)</h1>
                                    <div style={{ marginTop: '10px' }}>
                                        <Dropdown overlay={menu}>
                                            <Button style={{ width: '500px' }}>
                                                请选择CA公司 <Icon type="down" />
                                            </Button>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                            <Button className={styles.button} size="large" type="primary" style={{ marginTop: '40px', width: '200px' }}>
                                下一步
                            </Button>
                        </div>
                    </div>
                }

                {step === 2 && <div className={styles.eid}>
                    <div style={{ textAlign: 'center' }}>
                        <div>
                            <h1 style={{ fontSize: '30px' }}>证书申请</h1>
                            <h1 style={{ fontSize: '16px', color: '#8E8E8E', marginTop: '10px' }}>选择证书类型</h1>
                        </div>
                    </div>
                    <div className={styles.eidIdentify}>
                        <div className={styles.card} >
                            <div style={{ textAlign: 'center' }}>
                                <div >
                                    <h1 style={{ marginTop: '40px' }} className={styles.f16}>通过手机认证</h1>
                                    <h1 style={{ marginTop: '10px' }} className={styles.grey}>(请使用有NFC功能的安卓手机并下载APP进行认证)</h1>
                                </div >
                                <div style={{ marginTop: '40px' }}>
                                    <img className={styles.grey} src={qrcode} style={{ width: '150px', height: '150px', marginRight: '30px' }}></img>
                                    <img src={phoneH} style={{ width: '200px', height: '200px', borderLeft: '1px solid #DCDCDC', paddingLeft: '30px' }}></img>
                                </div>
                                <div style={{ marginTop: '40px' }}>
                                    <Button className={styles.button} size="large" type="primary" ghost style={{ marginTop: '40px', width: '200px' }}>
                                        我已认证完成
                                </Button>
                                </div>

                            </div>
                        </div>
                        <div className={styles.card} style={{ marginLeft: '30px' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div >
                                    <h1 style={{ marginTop: '40px' }} className={styles.f16}>通过PC认证</h1>
                                    <h1 style={{ marginTop: '10px' }} className={styles.grey}>(请使用eID专用读卡器进行认证进行认证)</h1>
                                </div>
                                <div style={{ marginTop: '40px' }}>
                                    <img src={pcH} style={{ width: '150px', height: '190px' }}></img>
                                </div>
                                <div style={{ marginTop: '50px' }}>
                                    <Button className={styles.button} size="large" type="primary" ghost style={{ marginTop: '40px', width: '200px' }}>
                                        开始认证
                                </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                }

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

const CertificateRequest = Form.create()(CertificateRequestForm);

export default CertificateRequest;