import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import './layout.css';
import HeaderContent from '../components/headerContent/HeaderContent';
import SiderContent from '../components/SiderContent/SiderContent';
import BreadcrumbContent from '../components/breadcrumb/BreadcrumbContent';
import Messages from '../components/Messages/Messages';

const { Header, Content, Sider, Footer } = Layout;

const LayoutHome = () => {
   return <Layout className='layout'>
      <Header className="header">
         <HeaderContent />
      </Header>

      <Layout>
         <Sider width={200} className="site-layout-background">
            <SiderContent />
     </Sider>
         <Layout className='contentWrapper'>
            <Breadcrumb className='breadcrumb'>
               <Breadcrumb.Item >
                  <BreadcrumbContent />
         </Breadcrumb.Item>
            </Breadcrumb>
            <Content
               className="site-layout-background content"
            >
               <Messages />
       </Content>
            <Footer className='footer'>
               footer
       </Footer>
         </Layout>
      </Layout>
   </Layout>
}

export default LayoutHome;