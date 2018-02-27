import React from 'react';
import {Modal, Form, Input, Select, Radio, Row, Col} from 'antd';

const {TextArea} = Input;
const Option = Select.Option;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 18},
    },
};

const modal = ({
                   item = {},
                   onOK,
                   onCancel,
                   form: {
                       getFieldDecorator,
                       getFieldsValue
                   },
                   form,
                   ...modalProps
               }) => {

    const modalOpts = {
        onOk: () => {
            form.validateFields((err, values) => {
                if (!err) {
                    onOK && onOK(getFieldsValue());
                    handleReset();
                }
            });
        },
        onCancel: () => {
            onCancel && onCancel();
            handleReset();
        },
        ...modalProps
    };

    const handleReset = () => {
        form.resetFields();
    };

    return (
        <Modal {...modalOpts}>
            <Form layout="horizontal">
                <Row>
                    <Col span={19}>
                        <FormItem label="用户名" hasFeedback {...formItemLayout}>
                            {getFieldDecorator('username', {
                                initialValue: item.username,
                            })(
                                <Input/>
                            )}
                        </FormItem>
                    </Col>
                    <Col span={5}>
                        <FormItem label="" hasFeedback {...formItemLayout}>
                            <img src={item.head_img} alt="avatar" className="fr" style={{width: '65px'}}/>
                        </FormItem>
                    </Col>
                </Row>
                {/* <FormItem label="手机" hasFeedback {...formItemLayout}>
                    {item.phone}
                    <span className="ml20 color-primary poi">取消绑定</span>
                </FormItem> */}
                {/* <FormItem label="微信" hasFeedback {...formItemLayout}>
                    {item.with_wechat === 1 ? '已绑定' : '未绑定'}
                    {item.with_wechat === 1 && <span className="ml20 color-primary poi">取消绑定</span>}
                </FormItem> */}
                <FormItem label="认证" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('auth_type', {
                        initialValue: item.auth_type,
                    })(
                        <Select style={{width: 120}}>
                            <Option value={1}>职业认证</Option>
                            <Option value={2}>实名认证</Option>
                            <Option value={3}>未认证</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="职业" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('profession', {
                        initialValue: item.profession,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="单位" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('company', {
                        initialValue: item.company
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="个人主页" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('homepage', {
                        initialValue: item.homepage,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="个人介绍" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('profile', {
                        initialValue: item.profile
                    })(
                        <TextArea/>
                    )}
                </FormItem>
                <FormItem label="修改密码" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('password', {
                        initialValue: item.password,
                    })(
                        <Input/>
                    )}
                </FormItem>
                <FormItem label="处罚" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('speak_status', {
                        initialValue: item.speak_status
                    })(
                        <RadioGroup>
                            <Radio value={1}>未禁言</Radio>
                            <Radio value={2}>禁言15天</Radio>
                            <Radio value={3}>禁言6个月</Radio>
                            <Radio value={4}>永久禁言</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
                {/* <FormItem label="退回原因" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('fail_reason', {
                        initialValue: item.fail_reason,
                    })(
                        <input />
                    )}
                </FormItem> */}
            </Form>
        </Modal>
    );
};

modal.propTypes = {};

export default Form.create()(modal);
