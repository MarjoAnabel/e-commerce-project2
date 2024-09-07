import { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'



const Products = () => {
  const context = useContext(ProductsContext);
  console.log('Context:', context); // Verifica qué está siendo recibido

  const { getProducts, products } = context;

  useEffect(() => {
    if (getProducts) {
      getProducts();
    } else {
      console.error('getProducts is undefined');
    }
  }, [getProducts]);

  return (
    <>
      {products && products.map((product) => (
        <div key={product._id}>
          <span>{product.name} </span>
          <span>{product.price.toFixed(2)}</span>
        </div>
      ))}
    </>
  );
}
export default Products