'use client';

import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import API from '@/app/util/API';

import "../../../static/css/pages/miru/anime-detail.css";

interface Anime {
  name: string,
  summary: string,
  season: string,
  type: string,
  genres: string[],
  visual: string,
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
        <div className='arcadia-entry'>
          <Utility anime={anime} />
          <Main anime={anime} />
          <Media />
        </div>
        </React.Fragment>
      :
        <></>
      }
    </div>
  )
}

function Main({ anime }: { anime: Anime }) {
  return (
    <div className='arcadia-entry__main'>
      <div className='arcadia-entry__main-meta'>
        <div className='quick-stats'>
          <div className='quick-stats__type'>
            <div><span className='emp'>Season: </span>{anime.season}</div>
            <div><span className='emp'>Type: </span>{anime.type}</div>
          </div>
          <div className='quick-stats__score'>
            Score
          </div>
          <div className='quick-stats__genre'>
            <h2>Genre</h2>
            <div className='quick-stats__genre-container'>
              {anime.genres.map((genre, index) => (
                <div key={index}>{genre}</div>
              ))}
            </div>
          </div>
        </div>
        <div className='promo-video'>
          <h2>Promotional Video</h2>
        </div>
      </div>
      <div className='arcadia-entry__main-summary'>
        <h2>Summary</h2>
        {anime.summary}
      </div>
    </div>
  )
}

function Utility({ anime }: { anime: Anime }) {
  return (
    <div className='arcadia-entry__utility'>
      <img className='arcadia-entry__utility-splash-art entry-section' src={anime.visual} />
      <div className='arcadia-entry__utility-update-stats entry-section'>
        <h2>Update Stats</h2>
      </div>
      <div className='arcadia-entry__utility-socials entry-section'>
        <h2>Social Media</h2>
      </div>
    </div>
  )
}

function Media() {
  return (
    <div className='arcadia-entry__media'>
      <h2>Media</h2>
    </div>
  )
}
