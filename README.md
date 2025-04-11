# Netflix GPT

## Description

Netflix GPT is a modern web application that combines the familiar Netflix interface with the power of AI to enhance the movie discovery experience. 
It features user authentication, real-time movie data from TMDB, and AI-powered movie recommendations using GPT technology.
The application provides a seamless streaming platform interface with personalized movie suggestions and multi-language support.

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **AI Integration**: Google's Gemini API
- **API Integration**: TMDB API for movie data
- **Build Tool**: Create React App
- **Deployment**: Firebase Hosting
- **Additional Features**: 
  - Google OAuth
  - Multi-language support
  - Responsive design
  - Custom hooks for data fetching

## Development Progress

- create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying app to production
- Create SignUp User account
- Implement Singin user API
- Created Redux Store with userSlice
- Implemented SignOut
- Update Profile
- Bug Fix: Sign up display name and profile pic update
- Bug Fix: if user is not logged in redirect to /browse and vice-versa
- Unsunscribed to the onAuthStateChange callback when component unmounts.
- Add hard coded values to the constants file.
- Register TMDB API & create an API and get access token.
- Get Data fro TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create a movieSlice
- Update Store with the movie data
- Planning for Main container and secondary container
- Fetch Data for Trailer Video
  Update store with Trailer video Data
- Embeded the Youtube video and make it autoplay and mute
- Tailwind Closes to make Main container look awsome
- Built Secondary container
- Built the movie List
- Found out TMDB IMAGE CDN URL
  -Made the browse page amazing with Tailwind css.
- Created usePopularMovies custom hook.
- GPT Search Page
- GPT Search Bar
- (Bonus) Multi-language Feature in our App
- Used GEMINI APIs
- Search API Call
- created gptSlice and data
- GPT Movie Suggestions component
- reused Movie List component to make movie suggestion container
- memoization
- added .env file
- adding .env file to gitignore
- Made our site responsive

## Features

- Login/Sign Up
  - Sign In/Sign Up Form
  - redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main movie
    - Trailer in background
    - Title and description
    - Movie suggestions
      - Movie Lists * N
- NetflixGPT
  - Search bar
  - Movie suggestions

## Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom hooks
├── utils/              # Utility functions and constants
├── App.js              # Main application component
└── index.js           # Application entry point
```

## Installation and Setup

1. Clone the repository
```bash
git clone [repository-url]
cd netflix-gpt
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory with the following variables:
```
REACT_APP_TMDB_KEY=[Your TMDB API Key]
REACT_APP_FIREBASE_CONFIG=[Your Firebase Config]
REACT_APP_GEMINI_API_KEY=[Your Gemini API Key]
```

4. Run the development server
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Building for Production

To create a production build:
```bash
npm run build
```

## Deployment

The application is configured for Firebase hosting. To deploy:

```bash
npm run build
firebase deploy
```