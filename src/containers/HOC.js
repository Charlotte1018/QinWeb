import React from 'react';

// 函数接受一个组件参数……
export default function HOC(WrappedComponent, selectData) {

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                modalVisible: false,
                // item: {}, modalFlag: 0, // 1添加管理员modal, 2编辑管理员modal
            };
        }

        modalToggle = () => {
            this.setState((prevState) => ({
                modalVisible: !prevState.modalVisible
            }));
        };

        render() {
            return (<WrappedComponent modalVisible={this.state.modalVisible} {...this.props}/>);
        }
    }
}