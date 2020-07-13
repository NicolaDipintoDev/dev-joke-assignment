import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import './layout.css';
import HeaderContent from '../components/headerContent/HeaderContent';
import SiderContent from '../components/SiderContent/SiderContent';
import BreadcrumbContent from '../components/breadcrumb/BreadcrumbContent';
import Messages from '../components/Messages/Messages';
import FooterContent from '../components/footerContent/FooterContent';

const { Header, Content, Sider, Footer } = Layout;

const LayoutHome = ({ isWriting, setIsWriting, setMyMessage, myMessage }) => {
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
                  <BreadcrumbContent isWriting={isWriting} />
               </Breadcrumb.Item>
            </Breadcrumb>
            <Content
               className="site-layout-background content"
            >
               <Messages setIsWriting={setIsWriting} />
            </Content>
            <Footer style={{ textAlign: 'center', backgroundColor: "#001529" }}>
               <FooterContent
                  myMessage={myMessage}
                  setMyMessage={setMyMessage}
               />
            </Footer>
         </Layout>
      </Layout>
   </Layout>
}

export default LayoutHome;