import React, {useState, useEffect} from 'react'
import './Row.css';
import axios from './axios';
const Row = ({title, FetchUrl, isLargeRow = false}) => {
    const [movies, setMovies] = useState([]);
    const base_url="https://image.tmdb.org/t/p/original/";
    useEffect(()=>{
       async function fetchMovies(){
           const request =await axios.get(FetchUrl);
           console.log(request);
           if(request.data.total_results > 0){
            setMovies(request.data.results);
           }

           return request;
       }       
 
       fetchMovies();
    },[FetchUrl]);

    return ( 
        <div className="movie__Row">       
         <h2 className='title'>{title}</h2>  
          <div className='movie__list '>
            { movies.map(movie => {          
             if ((isLargeRow &&  movie.poster_path) || (!isLargeRow &&  movie.backdrop_path )) { 
                return(
                    <img className={`poster ${isLargeRow && "posterLarge"}`} src={`${base_url}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`}  alt="poster"/>
                )
              }
             return false;

            })
            } 
            </div>
        </div>  
    )
}

export default Row
