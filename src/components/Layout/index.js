import React from 'react'
import { Layout } from 'antd'
import MenuList from 'components/Layout/MenuList'
import Header from './Header'
const { Content } = Layout

const MyLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <Header />
    <Layout>
      <MenuList />
      <Layout>
        <Content style={{ margin: '16px 0 16px 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

export default MyLayout
