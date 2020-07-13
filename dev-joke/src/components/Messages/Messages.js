import React from 'react';
import Message from './Message';
import Ban from './Ban'
import Delay from '../Delay';

const Messages = ({ setIsWriting, messages, setBanning }) => {
    return <div>
        {messages.map((message, index) => {

            return <Delay key={'Delay' + index} wait={message.delay}>

                {(!message.removed && true) ?
                    <Message
                        last={message.last || false}
                        setIsWriting={setIsWriting}
                        text={message.text}
                        author={message.author} />
                    : <Ban setBanning={setBanning} />}

            </ Delay>
        })}
    </div>
}

export default Messages;