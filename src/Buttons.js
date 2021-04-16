import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  //Navigation buttons
  const { isLoading, page, nbPages, handlePage } = useGlobalContext()

  return (
    <div className='btn-container'>
      <button disabled={isLoading} onClick={() => handlePage('dec')}> Назад </button>
      <p> {page} of {nbPages} </p>
      <button disabled={isLoading} onClick={handlePage.bind(this, 'inc')}> Далее </button>
    </div>
  )
}

export default Buttons
