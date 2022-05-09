import { GET_MOVIES_SUCCESS,GET_SELECT_MOVIE,GET_PAGE_NO_SUCESS,GET_SEARCH_MOVIE_SUCESS } from "../actions/actions";

const initialState= {
    movies:[],
    selectMovie:[],
}

const  movieReducer = (state = initialState,action)=>{
    switch (action.type){
        case GET_MOVIES_SUCCESS:
            // console.log("action",action.movies);
            return{...state,movies:action.movies}
        case GET_SELECT_MOVIE:
            const filterData = state.movies.filter((movie) => movie.id === action.payload)
            return{
                ...state,
                selectMovie:filterData
            }

            case GET_PAGE_NO_SUCESS:
                return{
                    ...state,
                    movies:action.payload
                }

            case GET_SEARCH_MOVIE_SUCESS:
                console.log("search",action.movies);
                return{
                    ...state,
                    movies:action.payload
                }
        default:
            return state;
    }
}
export default movieReducer