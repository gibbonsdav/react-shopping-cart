import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import "../styles/App.css"
import { getProducts } from "../redux/ducks/example/index"

export default props => {
  const [products, setProducts] = useState([])
  const [product, setProduct] = useState({})
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])
  return (
    <div className="container">
      <div className="buttons">
        <button>size buttons</button>
      </div>
      <div className="maingrid">
        <div className="product">
          {products.map(product => (
            <Link to={`/products/${product.id}`}>
              <img className="shirtpics" src={product.imgs.normal} />
              <p className="title">{product.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
