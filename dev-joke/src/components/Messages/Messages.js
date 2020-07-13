import React from 'react';
import Message from './Message';

const Messages = () => {
    return <>
        {[1, 2, 3, 4].map(() => <Message />)}
    </>
}

export default Messages;