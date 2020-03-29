import React from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'
import './index.css'

const MyLayout = ({ children }) => {

    return (
        <Layout className="layout">
            <Header>
                <div className="logo">Next APP</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                >
                    <Menu.Item key="1">
                        <Link href="/">
                            <a>Home</a>
                        </Link></Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/list">
                            <a>List</a>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div className="site-layout-content">
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>A next demo</Footer>
        </Layout>
    )
}

export default MyLayout