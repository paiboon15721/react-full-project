import React from 'react'
import { Row, Button } from 'antd'
import { Link } from 'react-router-dom'
import Table from 'components/Table'

export default () => (
  <>
    <Row type="flex" justify="end" style={{ marginBottom: 16 }}>
      <Button type="primary" htmlType="submit">
        <Link to="/employee/add-new">Add New</Link>
      </Button>
    </Row>
    <Table />
  </>
)
