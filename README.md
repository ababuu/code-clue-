# Code Clue

[Live Demo](https://code-clue-client.vercel.app/)

## Introduction

Code Clue is an AI-powered application designed to help developers understand code snippets. By leveraging the power of Google's Gemini AI, it provides detailed explanations for code provided by the user, making it easier to grasp complex logic or unfamiliar syntax.

## Features

- **Real-time Streaming:** Explanations are streamed instantly, providing a responsive user experience.
- **Multi-Language Support:** Supports JavaScript, Python, Java, and more.
- **Clean UI:** Built with Tailwind CSS for a modern, distraction-free interface.

## Tech Stack

**Frontend:**

- React (Vite)
- Tailwind CSS
- React Markdown

**Backend:**

- Node.js
- Express
- Google GenAI (Gemini)

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd code-clue-
    ```

2.  **Install Dependencies:**
    Run the following command in the root directory. This will automatically install dependencies for both the client and server.

    ```bash
    npm install
    ```

3.  **Environment Setup:**

    Create a `.env` file in the `server` directory:

    ```env
    GOOGLE_GENAI_API_KEY=your_api_key
    FRONTEND_URL=http://localhost:5173
    ```

    Create a `.env` file in the `client` directory:

    ```env
    VITE_API_BASE_URL=http://localhost:3002/api
    ```

4.  **Start the Application:**
    Run the following command to start both the client and server concurrently:
    ```bash
    npm run dev
    ```

## Structure

- `client`: React frontend (Vite)
- `server`: Node.js/Express backend
