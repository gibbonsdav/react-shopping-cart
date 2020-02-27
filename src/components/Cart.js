import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"

import "../styles/cart/cart.css"

export default props => (
  <div className="cartcontain">
    <button className="incartcart">
      <FiShoppingCart />
    </button>
    <p>Cart</p>
  </div>
)
