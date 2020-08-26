import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import Checkout from "./Checkout"
import { useItems } from "../redux/ducks/example/index"
import "../styles/App.css"

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/" component={Cart} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </Router>
  )
}
