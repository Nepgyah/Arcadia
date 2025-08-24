## Latest Release - Alpha v0.5 - Aug 31 2025
- API
	-  **Yomu
		- The following models have been added
			- Author
			- Work
			- WorkAuthor
			- WorkCharacter
			- WorkRelation
		- Added home endpoint
		- Added detail endpoint
	- **Kumitateru**
		- The following models have been added
			- Manufacturer
			- Part
			- Socket
			- Microarchitecture
			- CPU
			- MemoryType
			- RAM
			- Chipset
			- Motherboard
			- GPUMemoryType
			- GPU
			- PSU
			- CPUCooler
		- Added home endpoint
	- **Shared**
		- Main models have option to inherit from **Media** model
			- acquire standard fields such as title, slug, score and user
			- acquire basic to string function
- Website
	- Added cast study page
	- Added FAQ page
	- Added Legal Page
	- Added **Todokeru** landing
	- Added **WIP** error page
	- Added more members to team page
- Platform
	- **Yomu**
		- Added homepage
		- Added detail page
	- **Kumitateru**
		- Added homepage
		- Added
## Name
Arcadia - Your Otaku Sanctuary

## Description
Welcome to Arcadia! The ultimate platform for the ultimate otaku/fandomer/etc. Arcadia is a web platform that combines common activities related to anime/games/manga into one single solution. The public website contains information about the platform as well as Arcadia's creator company D2X which is essentially the esports team I had with my friends.

## Features
Here are the planned apps, a short description as well as real life equivalents.

### Primary Apps
**Miru** - Anime info, tracking and watching ( MyAnimeList / Crunchyroll )  
**Yomu** - Manga, LN, etc tracking and reading ( MangaDex )  
**Asobu** - Video game and mod library ( NexusMods / Steam )  
**Kau** - Online merch/commerce ( Amazon, Ebay )  
**Tsunagu** - Any Social media platform

### Secondary Apps
**Iku** - Event planner and tracker  
**Kiku** - Music library ( Spotify / Soundcloud )  
**Kumitateru** - PC guide and builder ( PcPartPicker )  
**Hiku** - Gacha game guide ( Prydwen, Game8 )  
**Shiru** - Blog and Articles ( AnimeNewsNetwork )
**Todokeru** - Videos and Streaming ( Youtube, Twitch )
**Sagasu** - Fun quizzes and tests ( Sporacle )
**Manabu** - Language learning ( Wanikani )
## Installation

### Requirements
- Python3
- NodeJS
### Steps
1. Setup virtual environment
    1. `py -m venv .venv`
    2. Note: use powershell
    3. If permission issue execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`
    4. Activate using `.\.venv\Scripts\activate`
2. Backend
    1. Install Django `pip install Django`
    2. Start server `py manage.py runserver`
3. Frontend
    1. Install Next js `npm install next@latest react@latest react-dom@latest`
    2. Start server `http://localhost:3000`
  
