import React from 'react';
import {Input, Select, Button} from 'antd';

const InputGroup = Input.Group;
const Option = Select.Option;

class Search extends React.Component {
    render() {
        return (
            <div>
                <InputGroup compact>
                    <Input style={{width: '50%'}}/>
                    <Select defaultValue="全部">
                        <Option value="0">全部</Option>
                        <Option value="1">文章</Option>
                        <Option value="2">推荐人</Option>
                        <Option value="3">来源</Option>
                        <Option value="4">分类</Option>
                        <Option value="5">审核人</Option>
                    </Select>
                    <Button>搜索</Button>
                </InputGroup>
            </div>
        );
    }
}

export default Search;
