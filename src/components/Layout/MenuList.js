import React, { useState } from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Sider } = Layout

const menus = [
  { name: 'Dashboard', icon: 'pie-chart', url: '/dashboard' },
  { name: 'Employee', icon: 'user', url: '/employee' },
  { name: 'Employee Add New', icon: 'user', url: '/employee/add-new' },
]

export default () => {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu
        theme="dark"
        defaultSelectedKeys={[
          menus.findIndex(v => v.url === pathname).toString(),
        ]}
        mode="inline"
      >
        {menus.map((v, k) => (
          <Menu.Item key={k}>
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
