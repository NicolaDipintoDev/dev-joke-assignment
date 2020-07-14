import React from 'react';
import { Button, Popover } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './footerContent.css';

const SendButton = ({sendMessage, isWriting ,banning}) => {

    const getTip = () => {
        if(isWriting !== ''){
            return 'Wait, another member is writing';
        }

        if(banning){
            return 'Wait, the administrator is blocking the messages';
        }

        return 'Send message';
    };

    return <span className="sendButton">
        <Popover content={getTip} trigger="hover">
            <Button
                type="text"
                icon={<SendOutlined style={{ color: "white", fontSize: "16px" }} />}
                disabled={isWriting !== '' || banning}
                onClick={() => sendMessage()}
                className='button'
            />
        </Popover>
    </span>
}

export default SendButton;