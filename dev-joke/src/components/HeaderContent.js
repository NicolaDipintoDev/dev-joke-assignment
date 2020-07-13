import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import '../App.css';

const HeaderContent = () => {
    return <div className='headerContent'>
        <WechatOutlined className='headerIcon' />
        <span className='headerSpan'>
            ChatAPP
            </span>
    </div>
}

export default HeaderContent;