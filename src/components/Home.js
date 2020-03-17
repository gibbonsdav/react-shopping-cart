import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import "../styles/App.css"
import { getProducts } from "../redux/ducks/example/index"
import { useProducts, useCart } from "../hooks"

export default props => {
  const { products } = useProducts()
  const { add } = useCart()
  // useEffect(() => {
  //   getProducts().then(data => setProducts(data))
  // }, [])

  function biggerCart() {}

  return (
    <div className="container">
      <div className="buttons">
        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>ML</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </div>
      <div className="popout"></div>

      <div className="maingrid">
        <div className="product">
          {products.map(product => (
            <div>
              <img className="shirtpics" src={`/assets/${product.sku}_1.jpg`} />
              <p className="title">{product.title}</p>
              <p className="title">
                {product.currencyFormat}
                {product.price.toFixed(2)}
              </p>
              <p className="shipping">Free Shipping</p>
              <div>
                <button onClick={e => add(product)} className="cart">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
