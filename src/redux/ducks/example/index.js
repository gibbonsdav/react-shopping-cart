import axios from "axios"

// 1. imports
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// 2. action definitions
const EXAMPLE_ACTION = "example/EXAMPLE_ACTION"

// 3. initial state
const initialState = {
  example: "example"
}

// 4. reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_ACTION:
      return { ...state, example: "foobar" }
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
