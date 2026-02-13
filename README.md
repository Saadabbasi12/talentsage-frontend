Overview

TalentSage is a recruiter-focused frontend application designed to demonstrate modern hiring workflows enhanced with AI-assisted features.
The project focuses on clean architecture, predictable state management, .

This repository represents the frontend engineering task submission and showcases best practices in React application design.


Goals of the Project
Simulate a real-world recruiter workflow
Demonstrate scalable frontend architecture
Maintain trust and transparency in AI-assisted actions
Ensure predictable UI state transitions
Provide clean documentation and test coverage


Key Features
Job pipeline with candidate stage management
Candidate profile with:
Skills overview
Resume preview
Video screening workflow
AI screening summary
Evaluation rubric editor
Full audit log for recruiter and AI actions
AI assistant (UI + state simulation)
Smooth UI animations with performance awareness


Tech Stack

React (Create React App)
Redux Toolkit – state management
React Router DOM – routing
Tailwind CSS – styling
Framer Motion – animations
Jest + React Testing Library – testing
GitHub – version control
Vercel – deployment


Setup Instructions
1️⃣ Clone the repository
git clone <your-repository-url>
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Run the application locally
npm start

The app will run at:

http://localhost:3000
🏗️ Build for Production
npm run build

This creates an optimized production build in the build/ folder.



Setup Instructions
1️⃣ Clone the repository
git clone <your-repository-url>
cd frontend
2️⃣ Install dependencies
npm install
3️⃣ Run the application locally
npm start

The app will run at:

http://localhost:3000
🏗️ Build for Production
npm run build



Covered Scenarios
Core workflow behavior
Candidate stage update reflects in UI state
Rubric logic
Rubric updates correctly  also when video screening is done
Assistant behavior
Assistant open/close state toggles correctly
Note: 1 test failed because of version incompatibility no issue in the test 
This creates an optimized production build in the build/ folder.
use Run Test for running 
Press a to run all tests
Press q to exit



