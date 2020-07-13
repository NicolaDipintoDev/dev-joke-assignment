import React from 'react';
import { Input } from 'antd';


const WritingBox = ({myMessage}) => {
    return <span>
        <Input
            style={{ borderRadius: "20px", width: "80%" }}
            placeholder="Write a message"
            value={myMessage}
            onChange={event => console.log(event.target.value)}
        />
    </span>
}

export default WritingBox;