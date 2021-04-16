import React from 'react'

//components
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

function App() {
  return (
    <>
      <SearchForm /> {/* search forom */}
      <Buttons /> {/* navigation buttons */}
      <Stories />  {/* stories */}
    </>
  )
}

export default App
