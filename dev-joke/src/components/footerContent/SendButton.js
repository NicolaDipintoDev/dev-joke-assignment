import React from 'react';
import { Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const SendButton = () => {
    return <div className="sendButton">
        <Button
            ghost
            type="text"
            icon={<SendOutlined className='sendIcon' />}
            disabled={false}
            onClick={() => console.log('sendButton clicked')}
        />
    </div>
}

export default SendButton;