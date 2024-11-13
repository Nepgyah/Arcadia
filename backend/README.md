# Arcadia Miru
## Anime
 - name - String
 - alternate_names - Array : strings
 - summary - textfield
 - Genre - FK / One To many
 - stats - JSON
	 - score
	 - users
	 - favorites
 - status - ChoiceInt
	 - 0 - Not yet aired
	 - 1 - Currently Airing
	 - 2 - Airing Completed
 - run_time - Int
 - socials - json
 - previous_anime - FK : Anime
 - next_anime - FK : Anime
 - airing_start - DateTime
 - airing_end - DateTime
## Season
- name
## Themes
- name
- 
## Studio
- name
- established
- favorites
- socials - JSON