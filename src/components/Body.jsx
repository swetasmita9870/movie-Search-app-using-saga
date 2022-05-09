import React, { useState } from 'react'
import Header from './Header'
import Left from './Left'
import Right from './Right'
import { useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { getmovieName } from '../actions/actions';
const Body = () => {
  const[query,setQuery] = useState("")
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movieReducer.movies)
    useEffect(() => {
      if(!query) return
      dispatch(getmovieName(query));
    },[query]);
  return (
    <>
    <Header query={query} setQuery={setQuery}/>
    <div className="Main-container">
     <Left/>
     <Right/>
     </div>
    </>
  )
}

export default Body
