import React, { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getMoviefetch } from '../actions/actions';
import { useEffect } from 'react';
import { getSelectMovie,getmoviePage } from '../actions/actions';

const Left = () => {
  const [pageNo, setPageNo] = useState(1)
  const [count,setCount] = useState(2);
    const dispatch = useDispatch();
    const movies = useSelector(state => state.movieReducer.movies)
    console.log("nextPage",movies);
    useEffect(() => {
      dispatch(getMoviefetch());
      dispatch(getmoviePage(pageNo));
    },[pageNo]);
    const prevPage = () => {
      setCount(count-1)
      if(pageNo === 1) return
      setPageNo(pageNo-1)
    }
    const nextPage = () =>{
      setCount(count+1)
      setPageNo(pageNo+1)
    }
    const showdata = (id) => {
      dispatch(getSelectMovie(id));
    };
    const renderMovie = movies.map((movies) => {
      const { id, title, backdrop_path } = movies;
      return (
        <div className="box-1" key={id}>
          <div className="eachMovie" onClick={() => showdata(id)}>
            <div className="movieLogo">
              <img
                // src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`}
                src={
                  backdrop_path
                    ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${backdrop_path}`
                    : `https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612`
                }
                alt={title}
                className="logo"
              />
            </div>
            <div className="movieTitle">
              <p>{title ? title : "N/A"}</p>
            </div>
          </div>
        </div>
      );
    });
  return (
    <>
    <div className='LeftContainer'>
    {renderMovie}
    <div className="btn-Group">
      {pageNo !== 1 &&(
        <button className="next" onClick={prevPage}>
              {count-2}
            </button>
      )} 
          <button className="prev" onClick={nextPage}>
          {count}
          </button>
        </div>
    </div>
       
    </>
  )
}

export default Left
