import React from 'react'
import { Form, Input, InputNumber, Select, Button } from 'antd'
import useFetch from 'hooks/useFetch'
import axios from 'utils/axios'
import { useHistory } from 'react-router-dom'

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

const EmployeeForm = props => {
  const [departments] = useFetch('/departments')
  const history = useHistory()

  const { validateFieldsAndScroll, getFieldDecorator } = props.form

  const handleSubmit = e => {
    e.preventDefault()
    validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        await axios.post('/employees', values)
        history.push('/employee')
      }
    })
  }

  return (
    <Form {...formItemLayout} onSubmit={handleSubmit}>
      <Form.Item label="FullName">
        {getFieldDecorator('name', { rules: [{ required: true }] })(
          <Input placeholder="Name" />,
        )}
      </Form.Item>
      <Form.Item label="Age">
        {getFieldDecorator('age', {
          rules: [{ required: true }],
          initialValue: 20,
        })(<InputNumber min={20} max={60} />)}
      </Form.Item>
      <Form.Item label="Salary">
        {getFieldDecorator('salary', {
          rules: [{ required: true }],
          initialValue: 25000,
        })(<InputNumber min={25000} max={80000} />)}
      </Form.Item>
      <Form.Item label="Department">
        {getFieldDecorator('department', {
          rules: [{ required: true }],
        })(
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a department"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children
                .toLowerCase()
                .indexOf(input.toLowerCase()) >= 0
            }
          >
            {departments.map(v => (
              <Option key={v.id} value={v.name}>
                {v.name}
              </Option>
            ))}
          </Select>,
        )}
      </Form.Item>
      <Form.Item label="Phone">
        {getFieldDecorator('phone', {
          rules: [{ required: true }],
        })(<Input placeholder="Phone" />)}
      </Form.Item>
      <Form.Item label="Email">
        {getFieldDecorator('email', {
          rules: [{ required: true }],
        })(<Input placeholder="email" />)}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ marginRight: '16px' }}
        >
          Add New
        </Button>
        <Button type="danger" onClick={() => history.push('/employee')}>
          Back
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Form.create({ name: 'employee' })(EmployeeForm)
