import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext/ProductsState'
const Products = () => {

  
  // const { getProducts, products, addCart, cart } = useContext(ProductsContext)
  // useEffect(() => {
    //   getProducts()
    // }, [])
    // useEffect(() => {
      //   localStorage.setItem('cart', JSON.stringify(cart))
      // }, [cart])
      const { getProducts, products } = useContext(ProductsContext)
      useEffect(() => {
        getProducts()
      }, [])
      
    // return(
    //   <main className='products'>
    //     <ul>
    //     {products.slice(0, 10).map(product => {

    //       return (
    //         <li key={product.id}>
    //            <img
    //             src={product.images[0]}
    //             alt={product.name}
    //           />
    //           <div>
    //             <strong>{product.name}</strong> - ${product.price}
    //           </div>
    //         </li>
    //       )
    //     })}
    //     </ul>
    //   </main>
    // )
    return(
      <main className='products'>
        <div className="card-deck"> 
          {products.slice(0, 10).map(product => {
            return (
              <div className="card">           
                <img className="card-img-top"
                  src={product.images[0]}
                  alt={product.name}
                />
                <div className="card-body">
                <h5 className="card-title"><strong>{product.name}</strong> - ${product.price}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                {/* si admin mostrar aqui stock disponible en pequeño */}
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    )

    

  // return (
  //   <main className='products'>
  //     <ul>
  //       {products.slice(0, 10).map(product => {
  //         const isProductInCart = checkProductInCart(product)

  //         return (
  //           <li key={product.id}>
  //             <img
  //               src={product.image}
  //               alt={product.title}
  //             />
  //             <div>
  //               <strong>{product.title}</strong> - ${product.price}
  //             </div>
  //             <div>
  //               <button
  //                 style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
  //                   isProductInCart
  //                     ? removeFromCart(product)
  //                     : addToCart(product)
  //                 }}
  //               >
  //                 {
  //                   isProductInCart
  //                     ? <RemoveFromCartIcon />
  //                     : <AddToCartIcon />
  //                 }
  //               </button>
  //             </div>
  //           </li>
  //         )
  //       })}
  //     </ul>
  //   </main>
  // )
  
}

export default Products