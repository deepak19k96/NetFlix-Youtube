import requests from './Requests';
const rowsList = [
    {
       title: 'Net Flix Originals',
       FetchUrl:  requests.fetchNetflixOriginals,
       isLargeRow: true,
    },
    {
        title: "Trending",
        FetchUrl:  requests.fetchTrending,
        isLargeRow: false,
     },
     {
        title: "Top Rated",
        FetchUrl:  requests.fetchTopRated,
        isLargeRow: false,
     },
     {
        title: "Romance Movies",
        FetchUrl:  requests.fetchRomanceMovies,
        isLargeRow: false,
     },
     {
        title: "Documentaries",
        FetchUrl:  requests.fetchDocumentaries,
        isLargeRow: false,
     },
     {
        title: "Action Movies",
        FetchUrl:  requests.fetchActionMovies,
        isLargeRow: false,
     },
     {
        title: "Comedy Movies",
        FetchUrl:  requests.fetchComedyMovies,
        isLargeRow: false,
     },
     {
        title: "Horror Movies",
        FetchUrl:  requests.fetchHorrorMovies,
        isLargeRow: false,
     },
    ];
 
 export default rowsList;