import React from 'react';
import WritingBox from './WritingBox';
import SendButton from './SendButton';
import './footerContent.css';

const FooterContent = ({myMessage, setMyMessage}) => {
    return <div className="footerContent" style={{ backgroundColor: "001529", margin:"0", padding:0 }}>>

        <WritingBox myMessage={myMessage}/>
        <SendButton setMyMessage={setMyMessage}/>

    </div>
}

export default FooterContent;