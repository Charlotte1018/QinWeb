import React from 'react';
import {Upload, Button, Icon, message} from 'antd';
// import reqwest from 'reqwest';
import 'whatwg-fetch';
import 'es6-promise';

class Demo extends React.Component {
    state = {
        fileList: [],
        uploading: false
    }

    handleUpload = () => {
        const {fileList} = this.state;
        const formData = new FormData();
        fileList.forEach((file) => {
            formData.append('files[]', file);
        });

        console.log(formData);

        this.setState({uploading: true});

        // You can use any AJAX library you like
        fetch('//jsonplaceholder.typicode.com/posts/', {
            method: 'post',
            data: formData,
            // success: () => {
            //     this.setState({fileList: [], uploading: false});
            //     message.success('upload successfully.');
            // },
            // error: () => {
            //     this.setState({uploading: false});
            //     message.error('upload failed.');
            // }
        }).then(res => {
            console.log(res);
        });
    }

    render() {
        const {uploading} = this.state;
        const props = {
            name: 'file',
            action: '//interface.fa123.com/file/upload',
            onRemove: (file) => {
                this.setState(({fileList}) => {
                    const index = fileList.indexOf(file);
                    const newFileList = fileList.slice();
                    newFileList.splice(index, 1);
                    return {fileList: newFileList};
                });
            },
            beforeUpload: (file) => {
                this.setState(({fileList}) => ({
                    fileList: [
                        ...fileList,
                        file
                    ]
                }));
                return false;
            },
            fileList: this.state.fileList
        };

        return (
            <div>
                <Upload {...props}>
                    <Button>
                        <Icon type="upload"/>
                        Select File
                    </Button>
                </Upload>
                <Button
                    className="upload-demo-start"
                    type="primary"
                    onClick={this.handleUpload}
                    disabled={this.state.fileList.length === 0}
                    loading={uploading}>
                    {uploading
                        ? 'Uploading'
                        : 'Start Upload'}
                </Button>
            </div>
        );
    }
}

    export default Demo;
