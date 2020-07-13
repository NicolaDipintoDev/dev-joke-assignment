import React from 'react';
import WritingBox from './WritingBox';
import SendButton from './SendButton';
import './footerContent.css';

const FooterContent = () => {
    return <div className="footerContent" style={{ backgroundColor: "001529", margin:"0", padding:0 }}>>

        <WritingBox />
        <SendButton />

    </div>
}

export default FooterContent;