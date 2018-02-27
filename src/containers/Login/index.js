import React from 'react';
import {Form, Icon, Input, Button} from 'antd';
import {Page} from '@/components';
import styles from './style.less';
import {login} from '@/api/login';
import {config, cookie} from '@/utils';
import {hashHistory} from 'react-router';
import store from 'store';

const {ERR_OK} = config;
const {setToken} = cookie;

const FormItem = Form.Item;

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 500);
    }

    handleSubmit() {
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                });
                login(values)
                    .then((res) => {
                        this.setState({
                            loading: false
                        });
                        if (res.error === ERR_OK) {
                            setToken(res.data.auth_token);
                            store.set('menus', res.data.menus);
                            store.set('name', res.data.name);
                            store.set('permissions', res.data.permissions);
                            hashHistory.push('/');
                        }
                    });
            }
        });
    }

    render() {

        const {getFieldDecorator} = this.props.form;

        const {loading} = this.state;

        const pageProps = {
            loading
        };

        return (
            <Page {...pageProps}>
                <div className={styles.form}>
                    <div className={styles.logo}>
                        <img alt={'logo'} src={config.logo}/>
                    </div>
                    <Form>
                        <FormItem>
                            {getFieldDecorator('username', {
                                rules: [{required: true, message: '请输入用户名!'}],
                            })(
                                <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    onPressEnter={this.handleSubmit.bind(this)}
                                    placeholder="用户名"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{required: true, message: '请输入密码!'}],
                            })(
                                <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    onPressEnter={this.handleSubmit.bind(this)}
                                    placeholder="密码"/>
                            )}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>
                                登录
                            </Button>
                        </FormItem>
                    </Form>
                </div>
            </Page>
        );
    }
}

const Login = Form.create()(LoginForm);

export default Login;
