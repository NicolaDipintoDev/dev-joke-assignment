import React from 'react';
import Message from './Message';
import Ban from './Ban'

const Messages = () => {
    return <>
        {[1, 2, 3, 4].map((_, index) => index < 3 ? 
        <Message text='messaggio' author='You'/> :
        <Ban />)}
    </>
}

export default Messages;