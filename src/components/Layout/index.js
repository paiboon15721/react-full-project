import React from 'react'
import { Layout } from 'antd'
import MenuList from 'components/Layout/MenuList'
const { Content } = Layout

const MyLayout = ({ children }) => (
  <Layout style={{ minHeight: '100vh' }}>
    <MenuList />
    <Layout>
      <Content style={{ margin: '16px 0 16px 16px' }}>
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
          {children}
        </div>
      </Content>
    </Layout>
  </Layout>
)

export default MyLayout
