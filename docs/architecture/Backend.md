## Tech Stack
- **Framework**: Django 5.x
- **API Layer**: Django Rest Framework
- **Authentication**: Django Rest Framework authentication
- **Admin**: Default Django Admin
- **API Calls**: Fetch
- **Database**: PostgreSQL (via Koyeb)
- **Hosting**: Koyeb

## Folder structure
- **accounts** - User and profiles
- **main** - primary backend folder
	- **settings** - API settings
		- **base.py** - Global api settings
		- **local.py** - dev-only settings
		- **production.py** - production-only settings
- **miru** - Miru app
- **shared** - shared/connect models to other apps