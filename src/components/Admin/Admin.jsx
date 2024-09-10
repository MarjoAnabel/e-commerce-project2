import React, { useContext, useEffect, useState  } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
import CreateProduct from '../Product/CreateProduct'
import EditProductModal from '../Product/EditProductModal'

const Admin = () => {
 const { getProducts, products, deleteProduct, getProductById } = useContext(ProductsContext)
 useEffect(() => {
   getProducts()
 }, [])

 const [isModalVisible, setIsModalVisible] = useState(false)

 const showModal = (id) => {
  getProductById(id)
   setIsModalVisible(true)
 }


 return (<>
    <CreateProduct/>
     {products ? (products.map((product) => (
         <div key={product._id}>
           <span>{product.name} </span>
           <span>{product.price.toFixed(2)}</span>
           <button onClick={() => deleteProduct('eliminar producto id:', product._id)}>
             <DeleteOutlined />
           </button>

           <button onClick={() => showModal(product._id)}>
             <EditOutlined />
           </button>
           <EditProductModal visible={isModalVisible} setVisible={setIsModalVisible}/>


         </div>))
     ) : (
       <span>Loading...</span>
     )}
   </>
 )
}
export default Admin