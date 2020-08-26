import React from "react"
import ReactDOM from "react-dom"
import Cart from "./Cart"
import { useCart } from "../redux/ducks/cart"

export default (props) => {
  const { cart, isOpen, toggle, remove, add } = useCart()

  const total = cart.reduce((a, b) => a + b.price * b.quantity, 0).toFixed(2)

  const cartItems = cart.length

  return (
    <div>
      <div className="">
        <p>You have {cartItems} items in your cart.</p>
        {cart.map((product) => (
          <div className="">
            <div className="">
              <img src={product.img.thumb} />
              <p>{product.title}</p>
              <p>{product.price.toFixed(2)}</p>
              <p>quantity: {product.quantity}</p>
              <button
                id="minus"
                className="ui button"
                onClick={(e) => remove(product.id)}
              >
                Remove
              </button>
              <button
                id="plus"
                className="ui button"
                onClick={(e) => add(product)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        <div className="total">
          <h2>Total: ${total}</h2>
          <button className="ui button active check">Checkout</button>
        </div>
      </div>
    </div>
  )
}
