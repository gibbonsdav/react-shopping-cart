import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useCart } from "../redux/ducks/cart"
import "../styles/cart/cart.css"

export default (props) => {
  const { cart, isOpen, toggle } = useCart()

  const total = cart.reduce((a, b) => a + b.price, 0).toFixed(2)

  return (
    <div className={`cartcontain ${isOpen && " open"}`}>
      <button className="incartcart">
        <FiShoppingCart onClick={(e) => toggle()} />
      </button>
      <p>Shopping Cart</p>
      <div className="list">
        {cart.map((product) => (
          <div className="product cart">
            <div className="innercart">
              <img src={product.img.thumb} />
              <p>{product.title}</p>
              <p>{product.price.toFixed(2)}</p>
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
