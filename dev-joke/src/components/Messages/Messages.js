import React from 'react';
import Message from './Message';
import Ban from './Ban'
import Delay from '../Delay';

const Messages = ({ setIsWriting, messages, isWriting }) => {
    return <div>
        {messages.map((message, index) => {

            return <Delay key={'Delay' + index} wait={message.delay}>

                {isWriting !== '' ? 
                <Message index={index} setIsWriting={setIsWriting} text='messaggio' author='Mario' />
                : <Ban />}
               
            </ Delay>
        })}
    </div>
}

export default Messages;