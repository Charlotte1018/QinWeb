import React from 'react';
import {Table} from 'antd';

class List extends React.Component {
    render() {

        const columns = [{
            title: '用户名',
            dataIndex: 'username',
            key: 'username'
        }, {
            title: '推荐数量',
            dataIndex: 'recommendNum',
            key: 'recommendNum',
        }, {
            title: '推荐量排名',
            dataIndex: 'rank',
            key: 'rank',
        }];

        const data = [{
            key: '1',
            username: '叶森',
            recommendNum: 15,
            rank: 1
        }, {

            key: '2',
            username: '叶森',
            recommendNum: 13,
            rank: 2
        }, {
            key: '3',
            username: '叶森',
            recommendNum: 8,
            rank: 3
        }];

        return (
            <div>
                <Table columns={columns} dataSource={data}/>
            </div>
        );
    }
}

export default List;
