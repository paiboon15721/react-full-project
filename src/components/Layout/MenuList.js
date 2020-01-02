import React, { useState } from 'react'
import { Menu, Icon, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Sider } = Layout

const menus = [
  { name: 'Dashboard', icon: 'pie-chart', url: '/dashboard' },
  { name: 'Employee', icon: 'user', url: '/employee' },
  { name: 'Test', icon: 'user', url: '/test' },
]

const MenuList = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { pathname } = useLocation()
  const currentMenuKey = menus.findIndex(v => v.url === pathname).toString()

  return (
    <Sider
      breakpoint="lg"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <Menu theme="dark" selectedKeys={currentMenuKey} mode="inline">
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

export default MenuList
