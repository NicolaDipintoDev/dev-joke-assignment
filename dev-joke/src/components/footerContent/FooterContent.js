import React from 'react';
import WritingBox from './WritingBox';
import SendButton from './SendButton';
import './footerContent.css';

const FooterContent = () => {
    return <div className="footerContent">
        <WritingBox />
        <SendButton />
    </div>
}

export default FooterContent;