import "@static/css/pages/miru/anime-listing.css";
import AnimeCard from "../animeCard";

interface Anime {
    id: number,
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

export default async function Page() {
    const res = await fetch(`http://127.0.0.1:8000/api/miru/anime/list/seasonal/`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        return <p>Opps</p>
    }

    const data = await res.json();
    const animes : Anime[] = data.seasonal_anime;

    return (
        <div className="anime-listing">
            <h1>Anime This Season</h1>
            <div className="container">
                {
                    animes.map((anime, index) => (
                        <AnimeCard key={index} anime={anime}/>
                    ))
                }
            </div>
        </div>
    )
}
