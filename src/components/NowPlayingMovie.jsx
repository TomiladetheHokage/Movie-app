import React from 'react'
import { useGetAllNowPlayingMoviesQuery } from '../service/Api';
import style from './NowPlayingMovies.module.css'

const NowPlayingMovie = () => {
    // console.log(useGetAllNowPlayingMoviesQuery)
    const {data, isLoading, isError } = useGetAllNowPlayingMoviesQuery();
    console.log(data)

  const img = process.env.REACT_APP_MOVIE_IMAGES

    if(isLoading){
        return <div>Loading...</div>
    };

    if(isError){
        return<div><h1>An error occured</h1></div>
    }

  return(
    <div className={style.mainWrapper}>
        <div className={style.container}>
            {data?.results?.map((movie)=>(
                <div className={style.movie} key={movie.id}>

                <img className={style.img} src={`${img}${movie.poster_path}`} />
                <p>{movie.title}</p>
                <p className={style.overview}>{movie.overview}</p>
                <p>{movie.release_date}</p>

            </div>
        ))}
        </div>
        </div>
  )
}

export default NowPlayingMovie
