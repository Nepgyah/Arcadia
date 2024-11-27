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
  ranking_info: {
    score: number,
    users: number
  },
  series: {
    previous : {
      id: number,
      name: string,
      visual: string
    }
    next: {
      id: number,
      name: string,
      visual: string
    }
  },
  genres: string[],
  visual: string,
  media: {
    status: string,
  }
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
          <Sidebar anime={anime} />
          <Main anime={anime} />
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
      <div className='arcadia-entry__main-overview entry-section'>
        <div className='arcadia-entry__main-overview-meta'>
          <div className='meta-data entry-section '>
            <div className='meta-data__quick-stats'>
              <div className='meta-data__quick-stats-type'>
                <div><span className='emp'>Season: </span>{anime.season}</div>
                <div><span className='emp'>Type: </span>{anime.type}</div>
              </div>
              <div className='meta-data__quick-stats-ranking'>
                <div className='meta-data__quick-stats-ranking-score'>
                  {anime.ranking_info.score == null ?
                    "N/A"
                  :
                    anime.ranking_info.score
                  }
                </div>
                <div className='meta-data__quick-stats-ranking-user'>
                  {anime.ranking_info.users == null ?
                    "N/A"
                  :
                    `${anime.ranking_info.users } Users`
                  }
                </div>
              </div>
              <div className='meta-data__quick-stats-genre'>
                <h2>Genre</h2>
                <div className='meta-data__quick-stats-genre-container'>
                  {anime.genres.map((genre, index) => (
                    <div key={index}>{genre}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className='meta-data__promo-video'>
              <h2>Promotional Video</h2>
            </div>
          </div>
          <div className='arcadia-entry__main-summary'>
            <h2>Summary</h2>
            {anime.summary}
          </div>
        </div>
        <Media />
      </div>
      <div className='arcadia-entry__main-secondary'>
        <div className='anime-flow entry-section'>
          <h2>Anime Flow</h2>
          <div className='container'>
            <div className='previous-anime'>
              <h3>Previous Anime</h3>
              {
                  anime.series.previous ?
                    <div className='series-anime container'>
                      <img src={anime.series.previous.visual} />
                      <p>{anime.series.previous.name}</p>
                    </div>
                  :
                  <>
                  No Anime
                  </>
                }
            </div>
            <div className='next-anime'>
                <h3>Next Anime</h3>
                {
                  anime.series.next ?
                    <div className='series-anime container'>
                      <img src={anime.series.next.visual} />
                      <p>{anime.series.next.name}</p>
                    </div>
                  :
                  <></>
                }
            </div>
          </div>
        </div>
        <div className='anime-characters entry-section'>
          <h2>Characters</h2>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ anime }: { anime: Anime }) {
  return (
    <div className='arcadia-entry__sidebar'>
      <div className='arcadia-entry__sidebar-splash-art entry-section'>
        <img src={anime.visual} />
      </div>
      <div className='arcadia-entry__sidebar-update-stats entry-section'>
        <h2>Update Stats</h2>
      </div>
      <div className='arcadia-entry__sidebar-socials entry-section'>
        <h2>Social Media</h2>
      </div>
    </div>
  )
}

function Media() {
  return (
    <div className='arcadia-entry__main-overview-media'>
      <h2>Media</h2>
    </div>
  )
}
