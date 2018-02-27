import React from 'react';
import classnames from 'classnames';
import {hasValue} from '@/utils';
import PropTypes from 'prop-types';

const Extra = ({
    text,
    onOk,
    permissions = [],
    permissionKey = '',
    className = ''
}) => {

    return (
        <span
            style={{
            cursor: 'pointer'
        }}
            onClick={() => onOk()}
            className={classnames('color-primary', className, hasValue(permissions, permissionKey) || 'dn')}>
            {text}
        </span>

    );
}

Extra.propTypes = {
    text: PropTypes.string,
    onOk: PropTypes.func,
    permissions: PropTypes.array,
    permissionKey: PropTypes.string,
    className: PropTypes.string
};

export default Extra;
