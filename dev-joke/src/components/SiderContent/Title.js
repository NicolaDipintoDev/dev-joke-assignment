import React from 'react';
import { UsergroupDeleteOutlined } from '@ant-design/icons';

const Title = () => {
    return <div className='siderTitle'>
            <b><UsergroupDeleteOutlined className='siderTitleIcon' /> </b>

            <span className='siderSpan'>
                <b>Members: </b>
            </span>
        </div>
    
}

export default SiderContent;