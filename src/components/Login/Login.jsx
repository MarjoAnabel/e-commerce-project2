import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Form, Input, Button } from 'antd'

const Login = () => {
  const { login } = useContext(UserContext)
  const navigate = useNavigate()

  const onFinish = (values) => {
    login(values).then(() => {
      // Después de un login exitoso, redirige a /profile
      navigate('/profile')
    }).catch((err) => {
      console.error("Login failed: ", err)
      // Aquí podrías manejar el error si lo necesitas
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  useEffect(() => {
    setTimeout(() => {
      const foundToken = JSON.parse(localStorage.getItem('token'))
      if (foundToken) {
        navigate('/profile')
      }
    }, 2000)
  }, [login])
  
  


  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login




