import React from 'react';
import { Button, Popover } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const SendButton = () => {
    return <Popover content='Send message' trigger="hover">
        <Button
            ghost
            type="text"
            icon={<SendOutlined className='sendIcon' />}
            disabled={false}
            onClick={() => console.log('sendButton clicked')}
        />
    </Popover>

}

export default SendButton;