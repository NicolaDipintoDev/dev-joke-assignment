import React from 'react';
import Message from './Message';

const MyMessages = ({ setIsWriting, myMessages, setBanning }) => {
    return <div>
        {myMessages.map((message, index) => {

            return <Message
                last={message.last || false}
                setIsWriting={setIsWriting}
                text={message.text}
                author={message.author} />

        })}
    </div>
}

export default MyMessages;