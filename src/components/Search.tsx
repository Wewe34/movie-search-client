import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {mockData} from '../mockData';

interface IResults {
    title: string,
    poster: string,
    year: number,
    type: string
}

function Search() {
    const [movies, setMovies] = useState<IResults[]>([]);
    const [series, setSeries] = useState<IResults[]>([]);
    const [episodes, setEpisodes] = useState<IResults[]>([]);

    //getmovies
    useEffect(() => {
        mockData.forEach(data => {
            if (data.type === 'movie') {
                setMovies((movies: IResults[]) => [...movies, data])
            }
            if (data.type === 'series') {
                setSeries((series: IResults[]) => [...series, data])
            }
            if (data.type === 'episode') {
                setEpisodes((episodes: IResults[]) => [...episodes, data])
            } 
        })
    })
    return (
        <Box>
            
        </Box>
    )
}