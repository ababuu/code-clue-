# Code Clue

<!-- [Live Demo](LINK_GOES_HERE) -->

## Introduction

Code Clue is an AI-powered application designed to help developers understand code snippets. By leveraging the power of Google's Gemini AI, it provides detailed explanations for code provided by the user, making it easier to grasp complex logic or unfamiliar syntax.

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
    Ensure you have the necessary environment variables set up (e.g., Google GenAI API key) in your server configuration.

4.  **Start the Application:**
    Run the following command to start both the client and server concurrently:
    ```bash
    npm run dev
    ```

## Structure

- `client`: React frontend (Vite)
- `server`: Node.js/Express backend
