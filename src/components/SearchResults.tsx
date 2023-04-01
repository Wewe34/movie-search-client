import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {mockData} from '../mockData';
import EpisodesList from "./EpisodeList";
import MovieList from "./MovieList";
import SeriesList from "./SeriesList";

export interface IResults {
    title: string,
    poster: string,
    year: number,
    type: string
}



function SearchResults() {
    const [filmType, setFilmType] = useState<{movies: IResults[], series: IResults[], episodes: IResults[]}>({movies: [], series: [], episodes: []});

    //getmovies
    useEffect(() => {
        let typeMovie = mockData.filter((movie) => movie.type === 'movie');
        let typeSeries = mockData.filter((series) => series.type === 'series');
        let typeEpisode = mockData.filter((episode) => episode.type === 'episode');
        setFilmType({movies: typeMovie, series: typeSeries, episodes: typeEpisode})
    },[])
    return (
        <Box>
            {filmType.movies.length ?
            <MovieList movies={filmType.movies} /> : ''}
            {filmType.series.length ?
            <SeriesList series={filmType.series} /> : ''}
            {filmType.episodes.length ?
            <EpisodesList episodes={filmType.episodes} /> : ''}
        </Box>
    )
}

export default SearchResults;