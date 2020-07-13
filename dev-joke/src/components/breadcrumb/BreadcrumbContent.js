import React from 'react';
import './breadcrumbContent.css';

const BreadcrumbContent = ({ isWriting }) => {
    return <div>
        <div className="groupName">
            <h3>DevTeam </h3>
        </div>
        <h5 style={{ marginLeft: '5px' }}>
        {isWriting !== '' ? isWriting + ' is writing...' : <span style={{ color: "white" }}>as</span>}
        </h5>
    </div>
}

export default BreadcrumbContent;