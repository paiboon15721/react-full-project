import React from 'react'
import { Form, Input, InputNumber, Select, Button } from 'antd'

const { Option } = Select
const departments = ['staff', 'manager', 'sale', 'account', 'specialist']
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

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val) {
  console.log('search:', val)
}

export default () => {
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
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.props.children.toLowerCase().indexOf(input.toLowerCase()) >=
            0
          }
        >
          {departments.map((v, k) => (
            <Option key={k} value={v}>{v}</Option>
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
