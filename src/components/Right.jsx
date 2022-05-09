import React from 'react'
import { useSelector } from 'react-redux'

const Right = () =>{

  const data = useSelector(state => state.movieReducer.selectMovie);
  const selectMovie = data[0]
  // console.log(selectMovie?.poster_path)

  return (
    <>
       <div
        className={`RightSideContainer ${
          selectMovie && Object.keys(selectMovie)?.length > 0
            ? ""
            : "invisible"
        }`}
      >
        <div className="imagePoster">
          <img
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${selectMovie?.poster_path}`}
            alt={selectMovie?.title}
            className="logo-poster"
          />
        </div>
        <div className="detail-Movie">
          <img
            src={ selectMovie?.backdrop_path
              ? `https://www.themoviedb.org/t/p/w220_and_h330_face/${selectMovie?.backdrop_path}`
              : `https://media.gettyimages.com/vectors/cinema-poster-with-cola-filmstrip-and-clapper-vector-vector-id1244034031?s=612x612`}
            alt={selectMovie?.title}
            className="logo-movie-1"
          />
          <p className="movie-Name">{selectMovie?.title}</p>
        </div>
        <div className="movie-Description">
          <p className="Language">
            Language: {selectMovie?.original_language}
          </p>
          <p className="Popularity">Popularity: {selectMovie?.popularity}</p>
          <p className="Release_date">
            Release_date: {selectMovie?.release_date}
          </p>
          <p className="Rating">Rating:{selectMovie?.vote_average}</p>
          <p className="No.of_Rate">No.of_Rate:{selectMovie?.vote_count}</p>
          <p className="Description">Description: {selectMovie?.overview}</p>
        </div>
      </div>
    </>
  )
}

export default Right
