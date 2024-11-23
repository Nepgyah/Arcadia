'use client'
import React, { useEffect, useState } from 'react'
import API from '../util/API'

const MiruHome = () => {
  
  interface Anime {
    name: string,
    visual: string
  }
  
  const [isLoading, setIsLoading] = useState(true)
  const [seasonalAnime, setSeasonalAnime] = useState<Anime[]>([]);

  useEffect(() => {
    API.get("miru/dashboard/", {})
      .then((res) => {
        console.log(res.data.seasonal)
        setSeasonalAnime(res.data.seasonal);
        setIsLoading(false)
    })
    .catch((res) => {
        console.log(res)
    })
  }, [])
  
  return (
    <div>
      <h1>Miru Home</h1>
      {
        !isLoading ?
          seasonalAnime.map((anime, index) => (
            <div key={index}>
              <p>{anime.name}</p>
              <img src={anime.visual} />
            </div>
          )
          )
        :
          <></>
      }
    </div>
  )
}

export default MiruHome