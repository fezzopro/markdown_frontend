# Markdown Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v20.18.x)
- [Yarn](https://classic.yarnpkg.com/en/docs/install)
- [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/markdown_frontend.git
   cd markdown_frontend
   ```

2. Install dependencies:
    ```bash
    yarn install
    ```

### Running the Development Server
  1. To start the development server, run:
      ```bash
      yarn dev
      ```

3. Building the Application
  To build the application for production, run:
    ```bash
    yarn build
    ```

4. Running the Application
  To start the application in production mode, run:

    ```
      yarn start
    ```

  Open http://localhost:3000 with your browser to see the result.

### Running with Docker
  1. Build the Docker image:
      ```
        docker build -t markdown_frontend .
      ```
  
  2. Run the Docker container:
      ```
        docker run -p 3000:3000 markdown_frontend
      ```