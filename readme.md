# OhCrop Interview Challenge

This challenge is designed to assess your fundamental skills in frontend and backend development using React and Node.js. You'll be working with an existing project that includes a React-based interface and a Node.js/Express backend. Your task will be to improve both parts in small but meaningful ways.

---

## 1. Getting Started

Begin by cloning the repository from the following GitHub link:

```bash
git clone https://github.com/YOUR_ORG_OR_USERNAME/react-image-log-challenge.git
cd react-image-log-challenge
```

This repo consists of two folders - frontend (React app) and backend (Express server)

## 2. Environment Setup

If you do not have Node.js installed, please install it from [here](https://nodejs.org). You can confirm your installation using the following commands:

```bash
node -v
npm -v
```

You do not need to install React or Vite globally. Instead, install the dependencies locally for each part of the project by running:

```
cd frontend
npm install
```

then open another terminal to install the backend dependencies

```
cd ..
cd backend
npm install
```

## 3. Running the environment
The application is split between two servers, so you will need to run both the frontend and backend in separate terminal windows.

To start the backend server:

```
cd backend
node index.js
```

This will run the Express server on http://localhost:4000.

To start the frontend (React + Vite) app:

```
cd frontend
npm run dev
```
This will run the React application on http://localhost:5173.

When both are running, you should be able to open the frontend in your browser and see the application interface.

## 4. Your Task
The application displays three overlapping images and a button labeled "Log Event." Clicking the button currently sends a POST request to the backend, which logs a simple event containing the event type and timestamp.

You are expected to complete both a frontend and a backend task. These tasks are designed to test your comfort with layout, styling, API integration, and basic server-side logic.

### Frontend

The three images are currently overlapping one another. Your goal is to modify the layout so that all three images appear in a single horizontal line with even spacing. 

### Backend

First, ensure that the existing POST endpoint at /api/log works correctly. This endpoint should receive a JSON object containing the event type and timestamp. Your job is to make sure the event gets saved both in memory and also written to a file on disk (for example, logs.json or logs.txt). This means using Node.js’s file system module (fs) to append the data.

Second, implement a new GET endpoint at /api/logs that returns all the logged events in JSON format. These can come from memory or the file, as long as they represent the event history accurately.

After implementing the GET route, add a new button to the frontend labeled "View Logs." When clicked, this button should send a GET request to the /api/logs endpoint and display the logs on the page in a readable format. Each log should at minimum include the event type and timestamp.


## 5. Submission
We want you to clone this repository onto your local machines, complete the above mentioned tasks and make 2-3 minute long video explaining your approach and demonstrating the final result in the browser. The video should clearly show the browser after you have made the changes. You may use Microsoft Clipchamp for making the video. We will be sending out a google form shortly where you need to upload this video. 

**Deadline** - Today, 7pm GST
