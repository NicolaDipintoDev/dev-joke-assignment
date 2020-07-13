import React from 'react';
import Message from './Message';

const MyMessages = ({ setIsWriting, messages }) => {
    return <div>
        {messages.map((message) => {
            return <Message
                last={message.last || false}
                setIsWriting={setIsWriting}
                text={message.text}
                author={message.author} />

        })}
    </div>
}

export default MyMessages;