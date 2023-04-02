import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {mockData} from '../mockData';
import EpisodesList from "./EpisodeList";
import MovieList from "./MovieList";
import SeriesList from "./SeriesList";
import SelectionDetails from "./SelectionDetails";
import { resourceLimits } from "worker_threads";

export interface IResults {
    title: string,
    poster: string,
    year: number,
    type: string
}

interface SearchResultsProps {
    searchValue: string;
}


function SearchResults(props: SearchResultsProps) {
    const [filmType, setFilmType] = useState<{movies: IResults[], series: IResults[], episodes: IResults[]}>({movies: [], series: [], episodes: []});

    const {searchValue} = props;

    useEffect(() => {
        let typeMovie = mockData.filter((movie) => movie.type === 'movie');
        let typeSeries = mockData.filter((series) => series.type === 'series');
        let typeEpisode = mockData.filter((episode) => episode.type === 'episode');
        setFilmType({movies: typeMovie, series: typeSeries, episodes: typeEpisode})
    },[searchValue])
    return (
        <Box>
            <SelectionDetails />
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