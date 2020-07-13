import React from 'react';
import { Input } from 'antd';

const WritingBox = () => {
    return <Input
        className='writingBox'
        placeholder="Write a message"
        value=''
        onChange={event => console.log(event.target.value)}
    />
}

export default WritingBox;