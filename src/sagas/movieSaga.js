import {call, put,takeEvery, takeLatest} from 'redux-saga/effects'
import { GET_MOVIES_FETCH ,GET_MOVIES_SUCCESS,GET_PAGE_NO,GET_PAGE_NO_SUCESS,GET_SEARCH_MOVIE,GET_SEARCH_MOVIE_SUCESS} from '../actions/actions'; 
import axios from 'axios'

const moviesFetch =(pageNo=1,query="a") =>{
  
    return axios(`https://api.themoviedb.org/3/search/movie?api_key=5d98a7a1405b8032e28c31e19e4d10a9&language=en-US&query=${query}&page=${pageNo}&include_adult=false`)
}


function* workGetUsersFetch() {
    const res = yield call(moviesFetch);
    const movies = res.data.results;
    yield put({type: GET_MOVIES_SUCCESS,movies})
}

export function* getPage(dispatch) {
    const pageNo =dispatch.payload 
    const res = yield call(moviesFetch,pageNo);
    yield put({type:GET_PAGE_NO_SUCESS,payload:res.data.results}) 
  }
export function* getMovie(dispatch) {
    const query =dispatch.payload 
    const res = yield call(moviesFetch,1,query);
    console.log("hh",res);
    yield put({type:GET_SEARCH_MOVIE_SUCESS,payload:res.data.results}) 
  }

function* movieSaga() {
    yield takeEvery(GET_MOVIES_FETCH,workGetUsersFetch);
    yield takeLatest(GET_PAGE_NO,getPage)
    yield takeEvery(GET_SEARCH_MOVIE,getMovie)
}
export default movieSaga;