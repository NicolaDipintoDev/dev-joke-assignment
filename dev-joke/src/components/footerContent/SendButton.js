import React from 'react';
import { Button, Popover } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import './footerContent.css';

const SendButton = ({sendMessage, isWriting ,banning}) => {

    const getTip = (isWriting, banning) => {
        if(isWriting !== ''){
            return 'Wait, another member is writing';
        }

        if(banning){
            return 'Wait, the administrator is blocking the messages';
        }

        return 'Send message';
    };
    
    return <span className="sendButton">
        <Popover content={isWriting !== '' ? 'Wait, another member is writing' :'Send message'} trigger="hover">
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