import React, {useState, useEffect} from 'react'
import './Banner.css';
import axios from './axios';
import requests from './Requests';
const Banner = () => {
   const [movie, setMovie] = useState([]);
   
    useEffect(() => {
        async function fetchMovie(){
                const request = await axios.get(requests.fetchNetflixOriginals);
                setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length -1)]);
                return request;
        }
        fetchMovie();
    },[]);
   

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string;
      }
    return (
            <header
              className="banner"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                backgroundPosition: "center center",
              }}
            >
              <div className="banner__contents">
                <h1 className="banner__title">
                 {movie.name}
                </h1>
                <div className="banner__buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                  {truncate(movie.overview, 150)}
                </h1>
              </div>
        
              <div className="banner--fadeBottom" />
            </header>
          );
}

export default Banner
