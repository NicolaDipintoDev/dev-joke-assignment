import React, {useEffect } from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import './messages.css';

const Ban = ({setBanning}) => {

    useEffect(() => {
       setBanning(false);
    }, [])

    return <div className='ban'>
        <h1 className='banMessage'>
            <ExclamationCircleOutlined className='banIcon' />
            {' '}Mario has been removed
        </h1>
    </div >

}

export default Ban;