import React from 'react';

const Message = ({text, author}) => {
    return <div className='message' >
        <h5 className='messageTExt'>
            {text}
        </h5>
        <span className='messageAuthor'>
            {author}
        </span>
    </div >

}

export default Message;