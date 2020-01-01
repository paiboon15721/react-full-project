import React, { useState } from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link } from 'react-router-dom'
const { Sider } = Layout

const menus = [
  { name: 'Dashboard', icon: 'pie-chart', url: '/dashboard' },
  { name: 'Employee', icon: 'user', url: '/employee' },
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
            <Link to={v.url}>
              <Icon type={v.icon} />
              <span>{v.name}</span>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  )
}
