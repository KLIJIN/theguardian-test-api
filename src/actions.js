export const SET_LOADING = 'SET_LOADING'
export const SET_STORIES = 'SET_STORIES'
export const REMOVE_STORY = 'REMOVE_STORY'
export const HANDLE_PAGE = 'HANDLE_PAGE'
export const HANDLE_SEARCH = 'HANDLE_SEARCH'

export const setLoadingAction = () => {
    return { type: SET_LOADING }
}

export const setStoriesAction = (data) => {
    const { hits, nbPages } = data;
    return {
        type: SET_STORIES,
        payload: {
            hits: hits,
            nbPages: nbPages
        }
    }
}

export const removeStoryAction = (id) => {
    return {
        type: REMOVE_STORY,
        payload: { id: id }
    }
}

export const handlePageAction = (value) => {
    return {
        type: HANDLE_PAGE,
        payload: value
    }
}


export const handleSearchAction = (query, page) => {
    return {
        type: HANDLE_SEARCH,
        payload: {
            query: query,
            page: page
        }
    }
}

