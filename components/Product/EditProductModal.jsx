import { Button, Modal, Form, InputNumber, Input } from 'antd'
import { useEffect } from 'react'


const EditProductModal = ({ visible, setVisible }) => {
 const onFinish = (values) => {
    editProduct(values, product._id)
   setVisible(false)

const { product, editProduct } = useContext(ProductsContext)
const [form] = Form.useForm()

useEffect(() => {
  form.setFieldsValue(product)
}, [product])
 }

 

 return (
    <Modal title="Edit Product" open={visible} footer={[]}>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="Product Name" name="name">
          <Input placeholder="Product name" />
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber />
          </Form.Item>
          <span className="ant-form-text"> €</span>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
 
}

export default EditProductModal