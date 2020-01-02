import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Table, Divider, Button, Row } from 'antd'
import axios from 'axios'

const { Column } = Table

export default () => {
  const [employees, setEmployees] = useState([])

  const fetchEmployees = async () => {
    const { data: employees } = await axios.get(
      'http://localhost:4000/employees',
    )
    setEmployees(employees.map(v => ({ ...v, key: v.id })))
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  return (
    <>
      <Row type="flex" justify="end">
        <Button type="primary" htmlType="submit">
          <Link to="/employee/add-new">Add New</Link>
        </Button>
      </Row>
      <Table dataSource={employees}>
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
    </>
  )
}
