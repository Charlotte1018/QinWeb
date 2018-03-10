import React, { Component } from 'react';
import { Form, Icon, Input, Button, Select, Tabs } from 'antd';
import { Page } from '@/components';
import styles from './styless.less';

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

                        </div>
                    </div>
                    <div className={styles.right}>
                        <div className={styles.form}>
                            <div className={styles.title}>
                                <h3>登录</h3>
                            </div>
                            <Tabs defaultActiveKey="1">
                                <TabPane tab="个人登录" key="1">
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
                                            {getFieldDecorator('password', {
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <a className={styles.forget}>忘记密码？</a>
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                登录
                                            </Button>
                                        </FormItem>
                                        <FormItem>
                                            <span className={styles.forget}>没有账户？</span>
                                            <a className={styles.register}>现在注册</a>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                                <TabPane tab="企业登录" key="2">
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
                                                rules: [{ required: true, message: '请输入密码！' }]
                                            })(
                                                <Input size="large" prefix={<Icon type='lock' />} placeholder='密码' />
                                            )}
                                        </FormItem>
                                        <FormItem>
                                            <a className={styles.forget}>忘记密码？</a>
                                        </FormItem>
                                        <FormItem>
                                            <Button size="large" type="primary">
                                                登录
                                    </Button>
                                        </FormItem>
                                        <FormItem>
                                            <span className={styles.forget}>没有账户？</span>
                                            <a className={styles.register}>现在注册</a>
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