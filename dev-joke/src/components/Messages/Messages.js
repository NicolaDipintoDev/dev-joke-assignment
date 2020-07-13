import React from 'react';
import Message from './Message';
import Ban from './Ban'

const Messages = ({ setIsWriting, messages }) => {
    return <div>
        {messages.map((_, index) => index < 3 ?
            <Message index={index} setIsWriting={setIsWriting} text='messaggio' author='Mario' /> :
            <Ban />)}
    </div>
}

export default Messages;