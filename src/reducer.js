import { SET_LOADING, SET_STORIES, REMOVE_STORY, HANDLE_PAGE, HANDLE_SEARCH, } from './actions.js'

const initialState = {
  isLoading: true,
  hits: [],
  query: "",
  page: 0,
  nbPages: 0
}


const reducer = (state = initialState, action) => {
  // console.log("reducer")
  //debugger;
  console.log("Reducer ->>>", state);
  switch (action.type) {
    //-------------------------------------------------------------------------------------------------------------
    case SET_LOADING:
      return { ...state, isLoading: true }
    //-------------------------------------------------------------------------------------------------------------
    case SET_STORIES:
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages
      }
    //-------------------------------------------------------------------------------------------------------------
    case REMOVE_STORY:
      return {
        ...state,
        hits: state.hits.filter(story => story.id !== action.payload.id)
      }
    //-------------------------------------------------------------------------------------------------------------
    case HANDLE_SEARCH:
      console.log("reducer", state, action)
      return {
        ...state,
        query: action.payload.query,
        page: action.payload.page
      }
    //-------------------------------------------------------------------------------------------------------------
    case HANDLE_PAGE:
      if (action.payload === "inc") {
        let nextPage = state.page + 1
        if (nextPage > state.nbPages) {
          nextPage = 0
        }
        return { ...state, page: nextPage }
      }
      else if (action.payload === "dec") {
        let prevPage = state.page - 1
        if (prevPage <= 1) {
          prevPage = 1
        }
        return { ...state, page: prevPage }
      }
  }

}
export default reducer
