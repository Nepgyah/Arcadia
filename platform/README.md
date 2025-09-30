## Overview
This is the frontend of Arcadia built which contains both the public website and platform for Arcadia. The frontend will make API calls back to Django to grab information for each app.

## Design / Tech
The frontend will be split at the top between the public website which is labeled as `(public)` and the platform labeled as `platform`. The platform is built using Next.Js and its app router system alongside MUI for components and consistent styling. Further styling will be done through SCSS and implement the **BEM** methodology.

## Features
The main features built/planned are the following.
- Single account use between all the apps
- App usability without having an account ( viewing anime/manga/game info but not tracking or watching/reading)
- Customizable profiles
- Implementation of smaller AI tasks and other creative free APIs

## ENV Example
The frontend current does not need a private env file, so this section will be updated accordingly.