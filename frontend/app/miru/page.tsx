'use client';

import React, { useEffect, useState } from 'react'
import API from '../util/API'

import "../../static/css/pages/miru/miru-home.css"
import { Grid2 } from '@mui/material';
import Link from 'next/link';
interface Anime {
  id: number,
  name: string,
  visual: string
}

const MiruHome = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [seasonalAnime, setSeasonalAnime] = useState<Anime[]>([]);

  useEffect(() => {
    API.get("miru/dashboard/", {})
    .then((res) => {
      setSeasonalAnime(res.data.seasonal);
      setIsLoading(false)
    })
    .catch((res) => {
        console.log(res)
    })
  }, [])
  
  return (
    <div id='miru-home'>
      <h1>Miru Home</h1>

      <Grid2 container className="container">

        <Grid2 size={{ xs: 12, lg: 9}} className='main-content'>

          <div className='anime-row'>
            <h2>Fall 2024</h2>
            <Grid2 container justifyContent={'space-between'} columnSpacing={"16px"} className='anime-row__container'>
              {
                !isLoading ?
                  seasonalAnime.map((anime, index) => (
                    <AnimeCard anime={anime} key={index} />
                  )
                  )
                :
                  <></>
              }
            </Grid2>
          </div>
          <div className='divider'></div>
          <div className='anime-row'>
            <h2>Most Popular</h2>
            <Grid2 container justifyContent={'space-between'} className='anime-row__container'>
              {
                !isLoading ?
                  seasonalAnime.map((anime, index) => (
                    <AnimeCard anime={anime} key={index} />
                  )
                  )
                :
                  <></>
              }
            </Grid2>
          </div>

        </Grid2>
        <Grid2 size={{ xs: 12, lg: 3}}  className='friend-activity'>
            <h2>Friend Activity</h2>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default MiruHome;

const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <Link href={{
      pathname: "/miru/detail/",
      query: { id: anime.id}
    }}>
      <div className='anime-card'>
        <img className='anime-card__visual' src={anime.visual} alt={anime.name} />
        <p className='anime-card__title'>{anime.name}</p>
      </div>
    </Link>
  );
};