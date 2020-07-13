import React from 'react';
import Message from './Message';
import Ban from './Ban'

const Messages = ({ setIsWriting }) => {
    return <div>
        {[1, 2].map((_, index) => index < 3 ?
            <Message index={index} setIsWriting={setIsWriting} text='messaggio' author='Mario' /> :
            <Ban />)}
    </div>
}

export default Messages;