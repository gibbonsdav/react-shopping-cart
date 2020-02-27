import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import "../styles/App.css"

export default function() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  )
}
