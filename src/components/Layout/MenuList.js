import React, { useState } from 'react'
import { Menu, Icon } from 'antd'
import { Layout } from 'antd'
const { Sider } = Layout

const menus = [
  { name: 'Dashboard', icon: 'pie-chart' },
  { name: 'Employee', icon: 'user' },
]

export default () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menus.map((v, k) => (
          <Menu.Item key={k + 1}>
            <Icon type={v.icon} />
            <span>{v.name}</span>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
