import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Tabs, Checkbox } from 'antd';
import { Page } from '@/components';
import styles from './styles.less';
import {bg} from './svg.js';

//表单组件
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;

class RegisterForm extends Component {

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
                <div className={styles.login}>
                    <div className={styles.left}>
                        <div className={styles.background}>
                            <img src={bg}></img>
                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.form}>
                            <div className={styles.title}>
                                <h3>注册</h3>
                            </div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="个人用户注册" key="1">
                                    <Form>
                                        <FormItem>
                                            <Select size="large" style={{ width: '30%', paddingRight: '5%' }} value='+86'>
                                                <Select.Option value="+86">+86</Select.Option>
                                            </Select>
                                            {getFieldDecorator('phonenum', {
                                                rules: [{ required: true, message: '请输入手机号！' }]
                                            })(
                                                <Input size="large" style={{ width: '70%' }} prefix={<Icon type='user' />} placeholder='手机号' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('phonenum', {
                                                rules: [{ required: true, message: '请输入图形验证码！' }]
                                            })(
                                                <Input size="large" style={{ width: '70%' }} prefix={<Icon type='user' />} placeholder='图形验证码' />
                                            )}
                                            <img />
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入短信验证码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='短信验证码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='确认密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Checkbox >我同意"签宝宝用户协议"</Checkbox>
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                注册
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                                <TabPane tab="企业用户注册" key="2">
                                    {/* 第一步 */}
                                    <Form>
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: '请输入邮箱！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='user' />} placeholder='邮箱' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入图形验证码！' }]
                                            })(
                                                <Input size="large" style={{ width: '70%' }} prefix={<Icon type='lock' />} placeholder='图形验证码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入邮件验证码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='邮件验证码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                下一步
                                            </Button>
                                        </FormItem>
                                    </Form>
                                    {/* 第二步 */}
                                    <Form>
                                        <FormItem>
                                            {getFieldDecorator('email', {
                                                rules: [{ required: true, message: '请输入企业名称！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='user' />} placeholder='企业名称' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入联系人！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='联系人' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Select size="large" style={{ width: '30%', paddingRight: '5%' }} value='+86'>
                                                <Select.Option value="+86">+86</Select.Option>
                                            </Select>
                                            {getFieldDecorator('phonenum', {
                                                rules: [{ required: true, message: '请输入手机号！' }]
                                            })(
                                                <Input size="large" style={{ width: '70%' }} prefix={<Icon type='user' />} placeholder='手机号' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入图形验证码！' }]
                                            })(
                                                <Input size="large" style={{ width: '70%' }} prefix={<Icon type='lock' />} placeholder='图形验证码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入短信验证码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='短信验证码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                下一步
                                            </Button>
                                        </FormItem>
                                    </Form>
                                    {/* 第三步 */}
                                    <Form>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='设置密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='确认密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <Checkbox >我同意"签宝宝用户协议"</Checkbox>
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                注册
                                            </Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                            </Tabs>
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

const Register = Form.create()(RegisterForm);

export default Register;