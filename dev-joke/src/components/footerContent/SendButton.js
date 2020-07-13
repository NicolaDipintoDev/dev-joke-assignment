import React from 'react';
import { Button, Popover } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './footerContent.css';

const SendButton = ({sendMessage, isWriting}) => {
    return <span className="sendButton">
        <Popover content='Send message' trigger="hover">
            <Button
                ghost
                type="text"
                icon={<SendOutlined style={{ color: "white", fontSize: "16px" }} />}
                disabled={isWriting !== ''}
                onClick={() => sendMessage()}
                className='button'
            />
        </Popover>
    </span>
}

export default SendButton;