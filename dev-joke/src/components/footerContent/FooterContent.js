import React from 'react';
import WritingBox from './WritingBox';
import SendButton from './SendButton';
import './footerContent.css';

const FooterContent = () => {
    return <div className="footerContent">
        <div>
            <WritingBox />
            <SendButton />
        </div>
    </div>
}

export default FooterContent;