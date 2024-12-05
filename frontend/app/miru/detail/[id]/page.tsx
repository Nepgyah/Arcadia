import React from 'react'
import UpdateTracker from '../detail_form';
import Avatar from '@mui/material/Avatar'

import "../../../../static/css/pages/miru/anime-detail.css";

interface Anime {
  name: string,
  summary: string,
  season: string,
  type: string,
  ranking_info: {
    score: number,
    users: number
  },
  genres: string[],
  media: {
    source: string,
    status: string,
    rating: string,
    start_date: string,
    end_date: string,
    studio: string[],
    licensor: string[],
    producer: string[]
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
  visual: string,
}

interface Character {
  name: string,
  summary: string,
  visual: string,
}

export default async function AnimeDetails( { params } : { params: { id: string} }) {
  const { id } = params;
  const res = await fetch(`http://127.0.0.1:8000/api/miru/anime/${id}/details/`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return <p>Opps</p>
  }

  const data = await res.json();
  const anime : Anime = data.anime
  const characters : Character[] = data.characters
 
  return (
    <div id='anime-details'>
        <h1>{anime.name}</h1>
        <div className='content-container'>
          <Sidebar anime={anime} />
          <Main anime={anime} characters={characters} />
        </div>
    </div>
  )
}

function Main({ anime, characters }: { anime: Anime, characters: Character[] }) {
  return (
    <div className='main'>
      <div className='overview entry-section'>
        <div className='meta'>
          <div className='meta-data entry-section '>
            <div className='quick-stats'>
              <div className='types'>
                <div>
                  <p className='emp'>Season:</p>
                  <p>{anime.season}</p>
                </div>
                <div>
                  <p className='emp'>Episode:</p>
                  <p>8 / 12</p>
                </div>
                <div>
                  <p className='emp'>Type:</p>
                  <p>{anime.type}</p>
                </div>
              </div>
              <div className='ranking'>
                <div className='score'>
                    {anime.ranking_info.score}
                </div>
                <div className='user'>
                    {`${anime.ranking_info.users } Users`}
                </div>
              </div>
              <div className='genre'>
                <h2>Genre</h2>
                <div className='.container'>
                  {anime.genres.map((genre, index) => (
                    <div key={index}>{genre}</div>
                  ))}
                </div>
              </div>
            </div>
            <div className='.promo-video'>
              <h2>Promotional Video</h2>
              <iframe src='https://www.youtube.com/watch?v=xpah3hGfkEs'/>
            </div>
          </div>
          <div className='summary'>
            <h2>Summary</h2>
            {anime.summary}
          </div>
        </div>
        <Media anime={anime} />
      </div>
      <div className='secondary'>
        <div className='anime-flow entry-section'>
          <h2>Anime Flow</h2>
          <div className='container'>
            <div className='previous-anime'>
              {
                  anime.series.previous ?
                    <div className='series-anime container'>
                      <img src={anime.series.previous.visual} />
                      <div>
                        <h3>Previous Anime</h3> 
                        <p>{anime.series.previous.name}</p>
                      </div>
                    </div>
                  :
                  <>
                  No Anime
                  </>
                }
            </div>
            <div className='next-anime'>
                {
                  anime.series.next ?
                    <div className='series-anime container'>
                      <img src={anime.series.next.visual} />
                      <div>
                        <h3>Next Anime</h3> 
                        <p>{anime.series.next.name}</p>
                      </div>
                    </div>
                  :
                  <></>
                }
            </div>
          </div>
        </div>
        <div className='anime-characters entry-section'>
          <h2>Characters</h2>
          <div className='characters-container'>
            {
              characters.map((character, index) => (
                <div key={index} className='character'>
                  <Avatar 
                    variant="circular" 
                    src={character.visual} 
                    alt={character.name}
                    sx={{ width: '64px', height: '64px' }} 
                  />
                  <p>{character.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function Sidebar({ anime }: { anime: Anime }) {
  return (
    <div className='sidebar'>
      <div className='splash-art entry-section'>
        <img src={anime.visual} />
      </div>
      <div className='update-stats entry-section'>
        <h2>Update Stats</h2>
        <UpdateTracker />
      </div>
      <div className='socials entry-section'>
        <h2>Social Media</h2>
      </div>
    </div>
  )
}

function Media({ anime } : { anime: Anime }) {
  console.log(anime.media);
  return (
    <div className='media'>
      <div className='entry-section'>
        <h2>Details</h2>
        <div className='details'>
          <p><span className='emp label'>Status: </span>{anime.media.status}</p>
          <p><span className='emp label'>Started Airing: </span>{anime.media.start_date}</p>
          <p><span className='emp label'>Ended Airing: </span>{anime.media.end_date}</p>
          <p><span className='emp label'>Rating: </span>{anime.media.rating}</p>
        </div>
      </div>
      <div className='entry-section'>
        <h2>Production</h2>
        <div className='production'>
          <p><span className='emp label'>Studio: </span>
            {
              anime.media.studio.map((studio, index) => (
                <span key={index}>{studio} </span>
              ))
            }
          </p>
          <p><span className='emp label'>Licensors: </span>
            {
              anime.media.licensor.map((licensor, index) => (
                <span key={index}>{licensor} </span>
              ))
            }
          </p>
          <p><span className='emp label'>Producers: </span>
            {
              anime.media.producer.map((producer, index) => (
                <span key={index}>{producer} </span>
              ))
            }
          </p>
        </div>
      </div>
      <div className='entry-section'>
        <h2>Misc</h2>
        <div className='misc'>
          <p><span className='emp label'>Source: </span>{anime.media.source}</p>
        </div>
      </div>
    </div>
  )
}
