import React from 'react';
import { Layout, Breadcrumb } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

const LayoutHome = () => {
   return <Layout className='layout'>
   <Header className="header">
     Header
   </Header>

   <Layout>
     <Sider width={200} className="site-layout-background sider" >
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