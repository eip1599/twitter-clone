# Twitter Fullstack Clone

Created with React.js, Next.js, Apollo, Node.js, Express.js, GraphQL, PostgreSQL, and Docker.

The objective of this project is to create an example of a real-world application that is not trivial, with everything working together. Twitter is pretty big so only the main functionalities have been implemented.

## Local development

### First-time setup

Go into the client and server folder, copy `.env-sample` and rename to `.env`.

### Running the project

Make sure you have `docker-compose` installed. Then run:

    make dev

This will start the client and API servers. When they finish loading you can access the app with the address `http://localhost:3000`.

### Resetting the database

To start using the API you first need to reset the database. This will run the migrations and seed the database with initial data. Make sure the containers are running and run:

    make reset-db

## 🛠 Tech Stack:

- Front-end: React.js, Next.js, Apollo Client, styled-jsx, Adorable Avatars
- Back-end: Node.js, Express.js, Apollo Server, Knex.js, PostgreSQL, GraphQL
- Infrastructure: Docker, Heroku, Now
