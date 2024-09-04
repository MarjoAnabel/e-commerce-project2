import React from 'react'

const Products = () => {
  const { getProducts, products, addCart, cart } = useContext(ProductsContext)
  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <main className='products'>
      <ul>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products