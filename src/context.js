import React, { useContext, useEffect, useReducer, createContext } from 'react'
import {
  setLoadingAction, setStoriesAction, removeStoryAction, handlePageAction, handleSearchAction,
} from './actions.js'
import reducer from './reducer'


const key = "4f30b443-f361-4a5a-9c4e-a09d421c9565";
const query = "";
let url1 = `https://content.guardianapis.com/search?api-key=${key}`;
const url2 = `https://content.guardianapis.com/search?q=${query}&api-key=${key}`;

const getLocalStorage = () => {
  let cart = localStorage.getItem("query");
  if (cart) {
    return JSON.parse(localStorage.getItem("query"))
  } else {
    return ""
  }
}

const initialState = {
  isLoading: true,
  hits: [],
  query: getLocalStorage(),
  page: 1,
  nbPages: 0
}

const AppContext = createContext()

const ContextProvider = ({ children }) => {
  // console.log("ContextProvider")
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE", state)
  const fetchStories = async (url) => {
    console.log("fetchStories", url)
    dispatch(setLoadingAction())
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("ContextProvider_fetchStories come data from API-->", data)
      dispatch(setStoriesAction({ hits: data.response.results, nbPages: data.response.pages }))
    } catch (error) {
      console.log(error)
    }
  }

  const removeStory = (id) => {
    dispatch(removeStoryAction(id))
  }
  const handleSearch = (query) => {
    if (query != state.query) {
      dispatch(handleSearchAction(query, 1))
    } else {
      dispatch(handleSearchAction(query, state.page))
    }
  }

  const handlePage = (value) => {
    dispatch(handlePageAction(value))
  }

  useEffect(() => {
    localStorage.setItem("query", JSON.stringify(state.query));
    state.query
      ? fetchStories(`https://content.guardianapis.com/search?page=${state.page}&q=${state.query}&api-key=${key}`)
      : fetchStories(`https://content.guardianapis.com/search?page=${state.page}&api-key=${key}`)
  }, [state.query, state.page])

  return (
    <AppContext.Provider value={{ ...state, removeStory, handleSearch, handlePage }}>
      {children}
    </AppContext.Provider>
  )
}

//Custom Hook, использован в Button.js SearchForm.js
export const useGlobalContext = () => {
  return useContext(AppContext)
}


//Если не пользоваться кастомным хуком, испльзовать дефолтный useContext (Stories.js)
export { AppContext, ContextProvider }
