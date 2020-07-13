import React from 'react';
import './messages.css';

const Message = ({text, author}) => {

    return <div className={author !== 'You' ? 'message' :  'message right'}>
        <h5 className='messageText'>
            {text}
        </h5>
        <span className='messageAuthor'>
            {author}
        </span>
    </div >

}

export default Message;