import React from 'react';
import {Modal, Form, Input, Select, Row, Col} from 'antd';

const Option = Select.Option;
const FormItem = Form.Item;

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
            </Form>
        </Modal>
    );
};

modal.propTypes = {};

export default Form.create()(modal);
