## App Version Tracker
| App        | Version |
| ---------- | ------- |
| Website    | 1.0     |
| Account    | 1.2     |
| Miru       | 0.3.1   |
| Yomu       | 0.3.1   |
| Asobu      | 0.1.1   |
| Tsunagu    | 0.1     |
| Kau        |         |
| Iku        |         |
| Kiku       | 0.1.1   |
| Kumitateru | 0.1     |
| Hiku       |         |
| Shiru      |         |

## Alpha v3.0 - 11/26/2025
- **Overview**
	- Improve detail pages of Miru, Yomu and Asobu
	- Improve reusability of platform components
	- Introduce **zustand** library

- **Apps**
	- **Miru v0.3**
		- **API**
			- Add anime themes field
			- Improv miru graphql queries
		- **Platform**
			- Convert pages to utilize graphql and SSR
			- Add tab content on detail page
			- Various UI improvements on miru lists
	
	- **Miru v0.3.1**
		- **API**
			- Added graphql queries
		- **Platform**
			- Improve ux on loading
			- Improve ssr/csr implementation and loading optimization

	- **Tsunagu v0.2**
		- **API**
			- Add graphql queries
		- **Platform**
			- Convert pages to SSR
			- Various UI improvements
		
	- **Yomu v0.3**
		- **API** 
			- Add graphql queries
		- **Platform**
			- Convert pages to SSR
			- Various UI improvements
		
- **Account v1.1**
	- **Platform**
		- Add template for profile page
		- Creat global state for user
		- Fix account pages (login/forgot/login/reset)

## Alpha v2.0 - Nov 23 2025
- **Overview**
	- Introduced GraphQL
	- Migrated public website
	- Added new App: Kiku
	- Reworked / Improved several model layouts
	- Improved responsiveness on the platform
	- Disabled Tsunagu
	
- **API**
	- Added Graphql functionality
	- **Miru**
		- Added graphql schema and resolvers
	- **Yomu**
		- Added graphql schema and resolvers
	- **Asobu**
		- Added graphql schema and resolvers
	- **Kiku v0.1**
		-  The following models have been added
			- Song
			- Album
			- Artist
		- Added graphql schema and resolvers
	- **Character**
		- Reworked relations to hand various va/character/artist connections
		- Added graphql schema
	
- **Website**
	- Moved website to new domain: https://project-arcadia-jade.vercel.app

- **Platform**
	- Cleaned up core scss files
	- Created common platform components
	- Added mobile layout for header
	- Updated responsiveness of platform

## Alpha v1.2 - Sep 23 2025
- Apps
	- **Yomu v0.2**
		- Added all time endpoint and page
		- Added search endpoint and page
		- Added internal model for yomu related companies
	- **Miru v0.2**
		- Added search endpoint and page
		- Added seasonal endpoint and page
		- Added internal model for miru related companies
	-  **Asobu v0.1**
		- The following models have been added
			- Company
			- Game
			- DLC
		- Added home endpoint
		- Added detail endpoint
	- **Tsunagu v0.1**
		- The following models have been added
			- Community
			- Post
			- Comment
		- Added home endpoint
		- Added community detail endpoint
		- Added post detail endpoint
	- **Shared**
		- The following models have been added
			- Franchise
			- Media
		- Extracted `Character` and `Talent` models out of shared
	- Updated current views to receive object id instead of slug
	- Added `Franchise` key to several models
		- Added socials to franchise model
- **Website v0.4**
	- Added esports page
	- Updated team page
- Platform
	- Adjusted overall styling
	- Updated API calls to send object id instead of slug
	- Updated sidebar menu to highlight current page

## Alpha v1.1 - Aug 31 2025
- API
	-  **Yomu**
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

## Alpha v1.0 - Jul 27 2025
- API
	-  **Miru v0.1**
		- Added **Anime** model
		- Added home endpoint
		- Added detail endpoint
	- Create **shared** app
		- Added **Company** model
		- Added **Character** model
		- Added **Genre** model
- Website
	- Fixed website bugs and text

- Platform
	- **Miru**
		- Home page content
		- Detail page content

## Alpha v0.3- Jul 17 2025
- API
	-  Created **accounts** app
	- Added profile endpoints
- Website
	- Added hero sections for the following apps
		- **Iku**
		- **Kiku**
		- **Hiku**
		- **Kumitateru**
		- **Shiru**
- Platform
	- Added simple placeholder for all apps
	- Added **Profile** page
- Dev
	- Add backend API service

## Alpha v0.2 - Jul 13 2025
This version adds 2 more pages under the **D2X** tab for the public website
- Added **About Us**
- Added **Careers**

## Alpha v0.1 - Jul 2 2025
This version focuses on the the public platform and the essentials for the website
- Added the **homepage**
- Created hero sections for the following apps
	- **Miru**
	- **Yomu**
	- **Asobu**
	- **Kau**
	- **Tsunagu**
- Added the **404** page
- Created the following pages under **D2X**
	- **Team**
