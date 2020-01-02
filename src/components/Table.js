import React from 'react'
import { Table, Divider, Button } from 'antd'
import useFetch from 'hooks/useFetch'

const { Column } = Table

export default () => {
  const [employees, loading] = useFetch('/employees')

  return (
    <Table dataSource={employees} loading={loading}>
      <Column title="Name" dataIndex="name" key="name" />
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Salary" dataIndex="salary" key="salary" />
      <Column title="Department" dataIndex="department" key="department" />
      <Column title="Phone" dataIndex="phone" key="phone" />
      <Column title="Email" dataIndex="email" key="email" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <span>
            <Button type="link">Edit</Button>
            <Divider type="vertical" />
            <Button type="link">Delete</Button>
          </span>
        )}
      />
    </Table>
  )
}
