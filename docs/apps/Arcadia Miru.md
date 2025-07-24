## Naming
見る -> Miru -> To See

## Overview
- **Frontend route**: /miru/*
- **Backend route**: /api/miru/*
## Features
- **Anime library** - Browse/search anime by title, genre, etc
- **Anime Details** - View metadata, characters, studio, etc
- **Anime Lists** - Create various lists based of different filters or personal
- **User Ratings** - Score anime and give personal reviews
- **Streaming** - 'Watch' anime on the same platform where you track them

## Real world counterparts
- Crunchroll
- HiDive
- Funimation
- MyAnimeList
- Anilist

## Models
### Anime
| Name               | Type          | Description                                     |
| ------------------ | ------------- | ----------------------------------------------- |
| title              | char          | Main title in english                           |
| title_ja           | char          | Title in japanese                               |
| title_romaji       | char          | Japanese title with romaji pronounciation       |
| title_alternatives | list          | Other names to reference the anime              |
| slug               | slug          | Hypenated version of name, used in frontend url |
| summary            | text          | Synopsis, introduction to the anime plot        |
| season             | foreignKey    | Season the anime is from                        |
| status             | integerChoice | Current airing state of the anime               |
| character          | ManyToMany    | Characters that appear in the anime             |
| genres             | ManyToMany    | Related genre tags                              |
| type               | integerChoice | Type of media for the anime                     |
| company            | foreignKey    | Studio producing the anime                      |
| score              | float         | Aggregate score by the users                    |
| users              | integer       | Number of users who have this anime on a list   |
| airing_start_date  | dateField     | Date the anime started airing                   |
| airing_end_date    | dateField     | Date the anime finished airing                  |
#### Media Type - IntegerChoice
| name  | value | string |
| ----- | ----- | ------ |
| TV    | 0     | Tv     |
| MOVIE | 1     | Movie  |
| OVA   | 2     | OVA    |
| ONA   | 3     | ONA    |
| WEB   | 4     | Web    |
#### Status - IntegerChoice
| name      | value | string          |
| --------- | ----- | --------------- |
| NOT_AIRED | 0     | Not yet aired   |
| AIRING    | 1     | Airing          |
| COMPLETED | 2     | Finished airing |
### AnimeCharacter
| Name      | Type          | Description                                |
| --------- | ------------- | ------------------------------------------ |
| anime     | foreignKey    | Anime model connection                     |
| character | foreignKey    | Character model connection                 |
| role      | integerChoice | The role the character place in this anime |
#### Status - IntegerChoice
| name    | value | string     |
| ------- | ----- | ---------- |
| MAIN    | 0     | Main       |
| SUPPORT | 1     | Supporting |
