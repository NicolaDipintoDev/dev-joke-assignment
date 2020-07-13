import React from 'react';
import Message from './Message';
import Ban from './Ban'
import Delay from '../Delay';

const Messages = ({ setIsWriting, messages }) => {
    return <div>
        {messages.map((message, index) => {

            return <Delay key={'Delay' + index} wait={message.delay}>
                <Message index={index} setIsWriting={setIsWriting} text='messaggio' author='Mario' />
            </ Delay>
        })}
    </div>
}

export default Messages;