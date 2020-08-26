import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "../redux/ducks/cart"
import "../styles/cart/cart.css"

export default (props) => {
  const { cart, isOpen, toggle, remove } = useCart()

  const total = cart.reduce((a, b) => a + b.price, 0).toFixed(2)

  return (
    <div className={`cartcontain ${isOpen && " open"}`}>
      <button className="incartcart">
        <FiShoppingCart onClick={(e) => toggle()} />
      </button>
      <div className="list">
        <p>You have {cart.length} items in your cart.</p>
        {cart.map((product) => (
          <div className="product cart">
            <div className="innercart">
              <img src={product.img.thumb} />
              <p>{product.title}</p>
              <p>{product.price.toFixed(2)}</p>
              <p>quantity: {product.quantity}</p>
              <button onClick={(e) => remove(product.id)}>Remove</button>
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
