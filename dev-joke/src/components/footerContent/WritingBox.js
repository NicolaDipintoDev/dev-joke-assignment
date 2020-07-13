import React from 'react';
import { Input } from 'antd';

const WritingBox = () => {
    return <div className="writingBox">
        <Input
            className='writingBox'
            placeholder="Write a message"
            value=''
            onChange={event => console.log(event.target.value)}
        />
    </div>
}

export default WritingBox;