'use client';

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import API from '@/app/util/API';
import { Grid2 } from '@mui/material';

import "../../../static/css/pages/miru/anime-detail.css";

interface Anime {
  name: string,
  visual: string,
  summary: string
}

export default function AnimeDetails() {
  const searchParam = useSearchParams()
  const [anime, setAnime] = useState<Anime | null >(null);

  useEffect(() => {
    const id = searchParam.get("id")!;
    console.log(id)
    API.get(`miru/anime/${id}/details/`)
    .then((res) => {
      setAnime(res.data.anime);
      console.log(res.data.anime)
    })
    .catch((res) => {
        console.log(res)
    })
  }, [])
  return (
    <div id='anime-details'>
      {anime ?
        <React.Fragment>
        <h1>{anime.name}</h1>
        <Grid2 container className='anime'>
          <Grid2 className="anime-access" size={{ xs: 12, lg: 2}} >
            <AccessColumn anime={anime} />
          </Grid2>
          <Grid2 className="anime-main-content" size={{ xs: 12, lg: 7}} >
            <h2>Main Content</h2>
          </Grid2>
          <Grid2 className="anime-extra-information" size={{ xs: 12, lg: 3}} >
            <h2>Extra</h2>
          </Grid2>
        </Grid2>
        </React.Fragment>
      :
        <></>
      }
    </div>
  )
}

function AccessColumn({ anime }: { anime: Anime }) {
  return (
    <React.Fragment>
      <img src={anime.visual} />
    </React.Fragment>
  )
}
