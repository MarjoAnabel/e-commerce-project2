import { useId } from 'react'
import { CartIcon } from '../Icons.jsx'

// function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
//   return (
//     <li>
//       <img
//         src={thumbnail}
//         alt={title}
//       />
//       <div>
//         <strong>{title}</strong> - ${price}
//       </div>

//       <footer>
//         <small>
//           Qty: {quantity}
//         </small>
//         <button onClick={addToCart}>+</button>
//       </footer>
//     </li>

// import { useContext } from 'react'
// import { ProductsContext } from '../../context/ProductsContext/ProductsState'
// import { OrdersContext } from '../../context/OrdersContext/OrdersState'

// const Cart = () => {
//  const { cart, clearCart } = useContext(ProductsContext)
//  const { createOrder } = useContext(OrdersContext)
//  useEffect(() => {
//   localStorage.setItem('cart', JSON.stringify(cart))
// }, [cart])
//  if (cart.length <= 0) {
//    return <span>No tienes ningún producto añadido</span>
//  }
//  const createNewOrder = () => {
//   createOrder(cart)
//   clearCart()
// }

// const cartItems = cart.map((cartItem, i) => {
//   return (
//     <div className="cart" key={i}>
//       <span>{cartItem.name}</span>
//       <span>{cartItem.price.toFixed(2)} €</span>
//     </div>

//   )
// })

// return (
//   <>
//     {cartItems}
//     <button onClick={() => clearCart()}>Clear cart</button>
//     <button onClick={() => createNewOrder()}>Create Order</button>
//   </>
// )

// }

function Cart () {
  const cartCheckboxId = useId()
  // const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      {/* <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside> */}
    </>
  )
}

export default Cart
