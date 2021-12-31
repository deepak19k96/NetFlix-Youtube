import React from 'react'
import './Homescreen.css';
import Nav  from './Nav';
import Banner from './Banner';
import Row from './Row';
import requests from './Requests';
export const Homescreen = () => {
    return (
        <div className='Home'>           
            <Nav></Nav>
            <Banner></Banner>

            <Row isLargeRow={true} title="Net Flix Originals" FetchUrl={requests.fetchNetflixOriginals}></Row>
            <Row  title="Trending" FetchUrl={requests.fetchTrending}></Row>
            <Row  title="Top Rated" FetchUrl={requests.fetchTopRated}></Row>
            <Row  title="Romance Movies" FetchUrl={requests.fetchRomanceMovies}></Row>      
            <Row  title="Documentaries" FetchUrl={requests.fetchDocumentaries}></Row>
            <Row  title="Action Movies" FetchUrl={requests.fetchActionMovies}></Row>
            <Row  title="Comedy Movies" FetchUrl={requests.fetchComedyMovies}></Row>
            <Row  title="Horror Movies" FetchUrl={requests.fetchHorrorMovies}></Row>
        </div>
    )
}
