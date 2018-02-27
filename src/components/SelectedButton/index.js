import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import classnames from 'classnames';

const SelectedButton = ({num, visible, text, onOK}) => {

    const handleClick = () => {
        onOK && onOK();
    };

    return (
        <div className={classnames('tr', 'mb10', {dn: !visible})}>
            <span className="pr10">选中 {num} 项</span>
            <Button type="primary" onClick={handleClick}>
                {text}
            </Button>
        </div>
    );
};

SelectedButton.defaultProps = {
    num: 0,
    visible: false,
    text: ''
};

SelectedButton.propsTypes = {
    num: PropTypes.number.isRequired,
    visible: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onOK: PropTypes.func
};

export default SelectedButton;
