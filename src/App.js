import React from 'react'
import { createStore } from "redux"
import { Provider as ReduxProvider } from "react-redux"

import reducer from "./reducer.js"
//components
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

const store = createStore(reducer);

function App() {
  return (
    <ReduxProvider store={store}>
      <SearchForm /> {/* search forom */}
      <Buttons /> {/* navigation button */}
      <Stories />  {/* stories*/}
    </ReduxProvider>
  )
}

export default App
