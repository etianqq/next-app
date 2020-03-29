import React from 'react'
import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;
import Link from 'next/link'
import './index.css'

const MyLayout = ({ children }) => {

    return (
        <Layout>
            <Header>
                <div className="layout-logo">Next APP</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
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
            <Content className='layout-container'>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>A next demo</Footer>
        </Layout>
    )
}

export default MyLayout