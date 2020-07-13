import React from 'react';
import { WechatOutlined } from '@ant-design/icons';
import './headerContent.css';

const HeaderContent = () => {
    return <div className="headerContent">
        <WechatOutlined className="headerIcon" />
        <span className="headerSpan">
            ChatAPP
            </span>
    </div>
}

export default HeaderContent;