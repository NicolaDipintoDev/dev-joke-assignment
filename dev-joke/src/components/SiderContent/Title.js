import React from 'react';
import { UsergroupDeleteOutlined } from '@ant-design/icons';
import './siderContent.css'

const Title = () => {
    return <div className='siderTitle'>
            <b><UsergroupDeleteOutlined className='siderTitleIcon' /> </b>

            <span>
                <b>Members: </b>
            </span>
        </div>
    
}

export default Title;