import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import '../App.css';
import HeaderContent from '../components/headerContent/HeaderContent';

const { Header, Content, Sider, Footer } = Layout;

const LayoutHome = () => {
   return <Layout className='layout'>
      <Header className="header">
         <HeaderContent />
      </Header>

      <Layout>
         <Sider width={200} className="site-layout-background">
            Sider
     </Sider>
         <Layout className='contentWrapper'>
            <Breadcrumb className='breadcrumb'>
               <Breadcrumb.Item >
                  Breadcrumb item
         </Breadcrumb.Item>
            </Breadcrumb>
            <Content
               className="site-layout-background content"
            >
               Content
       </Content>
            <Footer className='footer'>
               footer
       </Footer>
         </Layout>
      </Layout>
   </Layout>
}

export default LayoutHome;