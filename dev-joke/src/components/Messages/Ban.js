import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './messages.css';

const Ban = () => {

    return <div className='ban'>
        <h1 className='banMessage'>
            <ExclamationCircleOutlined className='banIcon' />
            {' '}Mario has been removed
        </h1>
    </div >

}

export default Ban;