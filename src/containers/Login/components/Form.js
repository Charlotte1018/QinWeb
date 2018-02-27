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
        <span>没有账户？</span>
        <a>现在注册</a>
    </FormItem>
</Form>