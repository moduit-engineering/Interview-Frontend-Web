
import { useState } from 'react'
import type { AppProps } from 'next/app'
import "antd/dist/antd.css"
import 'styles/globals.css'
import Head from "next/head"
import React from "react"
import Image from 'next/image'
import { MenuOutlined } from "@ant-design/icons"
import { Layout } from "antd"
import { Button, Drawer } from "antd";
import SidebarComponent  from '@components/sidebar'
import FooterComponent from '@components/footer'

const { Header, Footer, Content, Sider } = Layout;

function MyApp({ Component, pageProps }: AppProps) {

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Sider className="site-layout-background text-center bg-white rounded-r-3xl drop-shadow-lg hidden sm:block">
          <SidebarComponent />
        </Sider>
        <Layout style={{ minHeight: "100vh" }}>
          <Header className="block sm:hidden site-layout-background text-center bg-white py-4 px-6">
            <div className="flex justify-between align-middle">
              <Image
                src="/logo/logo.svg"
                alt="Homepage"
                width={135}
                height={34}
                className="bg-white"
              />
              <MenuOutlined className="blue-4" onClick={showDrawer} style={{fontSize: "32px"}}/>
            </div>
            <Drawer placement="right" onClose={onClose} visible={visible}>
              <SidebarComponent />
            </Drawer>
          </Header>
          <Content className="p-6">
            <Component {...pageProps} />
          </Content>
          <Footer>
            <FooterComponent />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default MyApp