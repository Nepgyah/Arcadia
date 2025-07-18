## NOTE
The backend is still in the process of being put on production. To view the latest backend code, please check the `develop` or any app focused feature branch.

## Name
Arcadia: Your Otaku Sanctuary!

## Description
Welcome to Arcadia! The ultimate platform for the ultimate Otaku. Arcadia is a web platform that aims to combine the common activities of an otaku into one convenient platform. The public website aims to explain the details of each app, and also a info simulation of our company "Team Double Dragon" such as about us, team and opportunity pages. There are the planned apps and a short description as well as real life equivalents.

**Miru** - Anime info, tracking and watching ( MyAnimeList / Crunchyroll )  
**Yomu** - Manga, LN, etc tracking and reading ( MangaDex )  
**Asobu** - Video game and mod library ( NexusMods / Steam )  
**Kau** - Online merch/commerce ( Amazon, Ebay )  
**Tsunagu** - Any Social media platform 

**Iku** - Event planner and tracker  
**Kiku** - Music library ( Spotify / Soundcloud )  
**Kumitateru** - PC guide and builder ( PcPartPicker )  
**Hiku** - Gacha game guide ( Prydwen, Game8 )  
**Shiru** - Blog and Articles ( AnimeNewsNetwork )  

## Technologies
Arcadia will be implement using a Next JS frontend to handle both the public website, platform and possible admin sections. The backend will be built using Django and serve as an API accepting calls only from the frontend domain. There will be further plans to create a downloadable application and will require research on which technology will be suited to fit along side the prementioned.

## Installation / Setup
1. Install **python3 **and **Node JS**
2. Setup virtual environment
	1. `py -m venv .venv`
	2.  Note: use powershell
	3. If permission issue execute `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`
	4. Activate using `.\.venv\Scripts\activate`
3. Backend
	1. Install Django `pip install Django`
	2. Start server `py manage.py runserver`
4. Frontend
	1. Install Next js `npm install next@latest react@latest react-dom@latest`
	2. Start server `http://localhost:3000`
