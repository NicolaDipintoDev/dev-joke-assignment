import React from 'react';
import { Menu } from 'antd';
import './siderContent.css'
import { members } from '../../constants/members';

const Members = () => {
    return <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        className='menu'
    >
        {members.map((member, i) => {
            return <>  <Menu.Item key={i + 1}>{member}</Menu.Item>
                <Menu.Divider />
            </>
        })};


    </Menu>

}

export default Members;