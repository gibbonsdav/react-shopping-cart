import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const ADD_TO_CART = "cart/add_to_cart"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"
const TOGGLE_CART = "cart/TOGGLE_CART"

const initialState = {
  cart: [],
  isOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const exists =
        state.cart.filter((product) => product.id === action.payload.id)
          .length > 0
      if (exists) {
        const item = state.cart.find(
          (product) => product.id === action.payload.id
        )
        item.quantity = item.quantity + 1

        return {
          ...state,
          cart: state.cart.map((p) => {
            if (item.id === p.id) {
              return item
            } else {
              return p
            }
          }),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        }
      }
      return { ...state, cart: [...state.cart, action.payload] }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id != action.payload),
      }
    case TOGGLE_CART:
      if (action.hasOwnProperty("payload")) {
        return { ...state, isOpen: action.payload }
      } else {
        return { ...state, isOpen: !state.isOpen }
      }
    default:
      return state
  }
}

function addToCart(product) {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

function toggleCart(open) {
  if (open !== undefined) {
    return {
      type: TOGGLE_CART,
      payload: open,
    }
  } else {
    return { type: TOGGLE_CART }
  }
}
function removeFromCart(id) {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  }
}

export function useCart() {
  const dispatch = useDispatch()
  const add = (product) => dispatch(addToCart(product))
  const remove = (id) => dispatch(removeFromCart(id))
  const cart = useSelector((appState) => appState.cartState.cart)
  const isOpen = useSelector((appState) => appState.cartState.isOpen)
  const toggle = (open) => dispatch(toggleCart(open))

  return { add, cart, toggle, isOpen, remove }
}
