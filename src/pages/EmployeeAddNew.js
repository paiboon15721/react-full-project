import React from 'react'
import { Form, Input, InputNumber, Select, Button } from 'antd'
import useFetch from 'hooks/useFetch'

const { Option } = Select
const formItemLayout = {
  labelCol: {
    xs: { span: 28 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

function onChange(value) {
  console.log(`selected ${value}`)
}

export default () => {
  const [departments] = useFetch('/departments')

  return (
    <Form {...formItemLayout}>
      <Form.Item label="FullName">
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item label="Age">
        <InputNumber min={20} max={60} defaultValue={20} onChange={onChange} />
      </Form.Item>
      <Form.Item label="Salary">
        <InputNumber
          min={25000}
          max={80000}
          defaultValue={25000}
          onChange={onChange}
        />
      </Form.Item>
      <Form.Item label="Department">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a department"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {departments.map(v => (
            <Option key={v.id} value={v.id}>
              {v.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item label="Phone">
        <Input placeholder="Phone" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="email" />
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Add New
        </Button>
      </Form.Item>
    </Form>
  )
}
