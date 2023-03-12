import React from 'react'
import { useEffect, useState } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from './Requests'


function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData()

    }, [])

    console.log(movie)


    function truncate(string, n){
        return string?.length > n ? string.substr(0, n-1) + "..." : string;
    }

  return (
      <header
          className='banner'
          style={{
              backgroundSize: "cover",
              backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
              backgroundPosition: "center  center",
          }}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_title || movie?.original_name }</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <div className='banner__description'>
                    <h1>{truncate(movie?.overview, 150)}</h1>
                </div>
            </div>

            <div className='banner--fadeBottom' />

      </header>
  )
}

export default Banner