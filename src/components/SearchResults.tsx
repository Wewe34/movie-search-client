import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import SearchLists from "./SearchLists";

export interface IResults {
    Title: string,
    Year: string,
    imdbID: string,
    Poster: string,
    Type: string
}

interface SearchResultsProps {
    searchValue: string;
}


function SearchResults(props: SearchResultsProps) {
    const [filmTypes, setFilmType] = useState<{movies: IResults[], series: IResults[], episodes: IResults[]}>({movies: [], series: [], episodes: []});
    const [results, setResults] = useState<IResults[]>([]);
    const {searchValue} = props;
    const mounted = useRef();
    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=${process.env.REACT_APP_APIKEY}`);
                const data = await response.json();
                if (data.Search && data.Search.length > 0) {
                    setResults(data.Search);
                    let typeMovie = results.filter((movie: IResults) => movie.Type === 'movie');
                    let typeSeries = results.filter((series: IResults) => series.Type === 'series');
                    let typeEpisode = results.filter((episode: IResults) => episode.Type === 'episode');
                    setFilmType({movies: typeMovie, series: typeSeries, episodes: typeEpisode})
                }     
            } catch (error) {
                throw error;
            }
        }
        getMovies()
    },[searchValue])
    return (
        <Box>
            {filmTypes ?
            <SearchLists list={filmTypes} /> : ''}
        </Box>
    )
}

export default SearchResults;