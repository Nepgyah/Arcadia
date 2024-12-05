import Link from "next/link"

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
  
export default function AnimeCard({ anime } : { anime: Anime}) {
    return (
        <Link href={`/miru/detail/${anime.id}`}>
            <div className="anime-card">
                <p className="title">{anime.name}</p>
                <div className="anime-content">
                    <div className="left-col">
                        <div className="image">
                            <img src={anime.visual} />
                        </div>
                        <div className="quick-stats">
                            <div className="stat">
                                <p className="label">Episodes</p>
                                <p className="value">16 eps</p>
                            </div>
                            <div className="stat">
                                <p className="label">Score</p>
                                <p className="value">{anime.ranking_info.score}</p>
                            </div>
                            <div className="stat">
                                <p className="label">Users</p>
                                <p className="value">{anime.ranking_info.users}</p>
                            </div>
                        </div>
                    </div>
                    <div className="right-col">
                        <p>{anime.summary}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}