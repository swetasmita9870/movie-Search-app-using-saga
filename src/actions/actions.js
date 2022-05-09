export const GET_MOVIES_FETCH = "GET_MOVIES_FETCH";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_SELECT_MOVIE = "GET_SELECT_MOVIE"
export const GET_SELECT_MOVIE_SUCESS = "GET_SELECT_MOVIE_SUCESS"
export const GET_PAGE_NO = "GET_PAGE_NO"
export const GET_PAGE_NO_SUCESS = "GET_PAGE_NO_SUCESS"
export const GET_SEARCH_MOVIE = "GET_SEARCH_MOVIE"
export const GET_SEARCH_MOVIE_SUCESS = "GET_SEARCH_MOVIE_SUCESS"

export const getMoviefetch = () => ({
    type: GET_MOVIES_FETCH,
});
export const getSelectMovie = (selectMovie) => ({
    type: GET_SELECT_MOVIE,
    payload:selectMovie
});

export const getmoviePage = (page) =>({
    type: GET_PAGE_NO,
    payload:page

})
export const getmovieName = (query) =>({
    type: GET_SEARCH_MOVIE,
    payload:query

})
