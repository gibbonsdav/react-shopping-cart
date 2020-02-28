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
  todos: [],
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

function getItems() {
  return dispatch => {
    axios.get("/products").then(resp => {
      dispatch(getCount())
      dispatch({
        type: GET_ITEMS,
        payload: resp.data
      })
    })
  }
}

// function addItem(text) {
//   return dispatch => {
//     axios.post("/products", { text, status: "active" }).then(resp => {
//       dispatch(getItems())
//     })
//   }
// }

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
