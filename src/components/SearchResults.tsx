import React, { useEffect, useState } from "react";
// import { Box } from "@mui/material";
// import SearchLists from "./SearchLists";
// import Home from "./Home";
// import { useAppSelector } from "../store/hooks";


// export interface IResults {
//     Title: string,
//     Year: string,
//     imdbID: string,
//     Poster: string,
//     Type: string
// }



// function SearchResults() {
//     const [films, setFilms] = useState<{movies: IResults[], series: IResults[], episodes: IResults[]}>({movies: [], series: [], episodes: []});
//     const [results, setResults] = useState<IResults[]>([]);
//     const searchValue = useAppSelector((state) => state.user.searchInput);
//     useEffect(() => {
//        const getMovies = async () => {
//             try {
//                 const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_APIKEY}`);
//                 const data = await response.json();
//                 if (data.Search && data.Search.length > 0) {
//                     setResults(data.Search);
//                     let typeMovie = results.filter((movie: IResults) => movie.Type === 'movie');
//                     let typeSeries = results.filter((series: IResults) => series.Type === 'series');
//                     let typeEpisode = results.filter((episode: IResults) => episode.Type === 'episode');
//                     setFilms({movies: typeMovie, series: typeSeries, episodes: typeEpisode})
//                 }     
//             } catch (error) {
//                 throw error;
//             }
//         }
//         getMovies()
//     },[])
//     return (
//         <Box>
//             {films && searchValue.length ?
//             <SearchLists list={films} /> : 'No results found'}
//         </Box>
//     )
// }

// export default SearchResults;