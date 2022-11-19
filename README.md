## Summary

This project is a simple zipcode search API through GraphQL using Node.js, Typescript and React.js under monorepo architecture, with [zippopotam.us](https://www.zippopotam.us/#) free API.

## Requirements

- Operating system: Linux based/MacOS/WSL2 on Windows
- npm 8
- Node.js 16
- Docker
- Docker Compose

## Environment Setup

```bash
# Clone the project using HTTPS
git clone https://github.com/Siipe/zip-challenge-monorepo.git
```

## Installation

```bash
# Prepare database container
docker-compose -f "docker-compose.yml" up -d --build

# Install dependencies
npm install
```

## Running

```bash
# Start & Watch for API changes (Port 5000)
npm run api

# OPTIONAL: you only need to run this command if you modify GraphQL queries, mutations or schema
npm run gen

# Start frontend (web) React (Port 3000)
npm run web
```

## Tests

```bash
# e2e tests for the GraphQL API
npm run test:api
```

