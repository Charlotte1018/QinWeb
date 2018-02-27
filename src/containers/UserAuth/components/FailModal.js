import React from 'react';
import {Modal, Form, Radio} from 'antd';

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
                <FormItem label="退回原因" hasFeedback {...formItemLayout}>
                    {getFieldDecorator('speak_status', {
                        initialValue: item.speak_status
                    })(
                        <RadioGroup>
                            <Radio value={1}>图片不清晰</Radio>
                            <Radio value={2}>非正规证件</Radio>
                            <Radio value={3}>疑似修改证件</Radio>
                        </RadioGroup>
                    )}
                </FormItem>
            </Form>
        </Modal>
    );
};

modal.propTypes = {};

export default Form.create()(modal);
