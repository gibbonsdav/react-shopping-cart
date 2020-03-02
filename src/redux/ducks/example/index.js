import axios from "axios"
// import { useEffect } from "react"
// import { useSelector, useDispatch } from "react-redux"

// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const EXAMPLE_ACTION = "example/EXAMPLE_ACTION"
const GET_ITEMS = "item/GET_ITEMS"
const SET_COUNT = "item/SET_COUNT"

const initialState = {
  items: [],
  count: 0
}

// 3. initial state
// const initialState = {
//   example: "example"
// }

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state, count: action.payload }
    default:
      return state
  }
}

// 5. action creators
function someSyncAction() {
  return {
    type: EXAMPLE_ACTION
  }
}

// function getProducts() {
//   return dispatch => {
//     axios.get("/products").then(resp => {
//       dispatch(getCount())
//       dispatch({
//         type: GET_PRODUCTS,
//         payload: resp.data
//       })
//     })
//   }
// }

export function addProducts() {
  const products = []
  return dispatch => {
    axios.post("/cart", { products, status: "active" }).then(resp => {
      dispatch(getProducts())
    })
  }
}

function someAsyncAction() {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: EXAMPLE_ACTION
      })
    }, 1000)
  }
}

// 6. custom hook
export function useExample() {
  const dispatch = useDispatch()
  const example = useSelector(appState => appState.exampleState.example)

  const syncaction = dispatch(someSyncAction())
  const asyncaction = dispatch(someAsyncAction())

  useEffect(() => {
    console.log("mounting component")
  }, [])

  return { example, syncaction, asyncaction }
}

export function getProducts() {
  return new Promise((resolve, reject) => {
    axios
      .get("/products")
      .then(resp => {
        resolve(resp.data)
      })
      .catch(e => {
        reject(e)
      })
  })
}

function getCount() {
  return dispatch => {
    axios.get("/products?status=active").then(resp => {
      dispatch({
        type: SET_COUNT,
        payload: resp.data.length
      })
    })
  }
}

// export function useItems() {
//   const dispatch = useDispatch()
//   const items = useSelector(appState => appState.itemState.items)
//   const count = useSelector(appState => appState.itemState.count)
//   const add = text => dispatch(addItem(text))
// // const del = id => dispatch(deleteItem(id))
// const toggle = id => dispatch(toggleItem(id))
// const filter = filter => dispatch(filterItems(filter))
// const clear = () => dispatch(clearItems())

// useEffect(() => {
//   dispatch(getItems())
// }, [dispatch])

// return { items, add, count }
// }
