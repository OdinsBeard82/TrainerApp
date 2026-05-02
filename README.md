![App Screenshot](./assets/screenshot.png)

# TrainerApp

A React web application for personal trainers and clients to organize, track, and optimize training programs.

## Live Demo

[Open TrainerApp](https://effortless-griffin-496827.netlify.app/) — hosted on Netlify

## Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React |
| Styling | CSS |
| Routing | React Router |
| Deployment | Netlify |
| State Management | useState / Context API |

## Features

- Create and manage workout programs
- Track exercises, sets, and reps
- Plan training days and rest days
- View client or personal progress over time

## Setup

```bash
git clone https://github.com/OdinsBeard82/TrainerApp.git
cd TrainerApp
npm install
npm start
```

The app will be available at `http://localhost:3000`

## Project Structure

```
TrainerApp/
├── src/
│   ├── components/        # Reusable UI elements
│   ├── pages/             # Application screens
│   ├── context/           # Global state management
│   ├── utils/             # Helper functions
│   └── assets/            # Icons and images
├── public/
└── README.md
```

## Future Improvements

- Add authentication (login/signup)
- Build backend API (Node.js + Express)
- Implement database for client/workout data
- Add data visualisation for progress tracking
- Add test coverage with Jest / React Testing Library
