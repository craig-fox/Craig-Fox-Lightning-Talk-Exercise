# Craig Fox Lightning Talk Exercise

## Overview

This application was originally developed as part of a software engineering recruitment exercise.

The frontend is an **Angular 7** application generated using Angular CLI. The backend is a **Node.js/Express** application exposing a REST API backed by **MongoDB**.

The project demonstrates:

* Angular components and routing
* Reactive Forms
* REST API communication
* Express backend
* MongoDB persistence using Mongoose

The Angular application lives under `src`, with application code located in `src/app`.

The backend consists of `server.js` in the project root together with the code in the `backend` directory.

---

## Prerequisites

The project has been tested with:

* Node.js **12.22.x**
* npm **6.x**
* Docker Desktop

> **Note:** This project was originally developed against an MLab-hosted MongoDB instance. Since MLab has been discontinued, the application has been updated to use a local MongoDB instance running in Docker.

---

## Running MongoDB

Start a local MongoDB instance:

```bash
docker run -d \
  --name lightning-talk-mongo \
  -p 27017:27017 \
  mongo:6
```

The backend connects to:

```
mongodb://localhost:27017/topic-proposal
```

No authentication is required for the local development database.

To stop the container:

```bash
docker stop lightning-talk-mongo
```

To start it again later:

```bash
docker start lightning-talk-mongo
```

To remove it completely:

```bash
docker rm -f lightning-talk-mongo
```

---

## Installing the application

Install all dependencies:

```bash
npm install
```

---

## Running the backend

Start the Express backend:

```bash
npm run backend
```

The backend listens on:

```
http://localhost:3000
```

---

## Running the frontend

Open a second terminal and start the Angular development server:

```bash
npm start
```

Then open your browser and navigate to:

```
http://localhost:4200
```

---

## Application

The application consists of two main screens:

### Make Topic Proposal

Allows a user to submit a proposed lightning talk, including:

* Topic
* Description
* Email address

When submitted, the backend automatically calculates the next available lightning talk date before saving the proposal to MongoDB.

### View Proposals

Displays all submitted proposals currently stored in the database.

---

## Design decisions

Some of the design decisions made during development were:

* Separate Angular components for proposal submission and proposal viewing.
* Reactive Forms for validation and form handling.
* A dedicated service responsible for calculating the next available lightning talk date.
* A simple Express REST API for persistence.
* MongoDB used as the backing data store.

---

## Running unit tests

Run:

```bash
npm test
```

This launches Karma and executes the Angular unit tests.

---

## Running end-to-end tests

Run:

```bash
npm run e2e
```

This executes the Protractor end-to-end tests.

---

## Notes

This project has been preserved largely in its original Angular 7 form. A small number of changes have been made to keep it running in a modern development environment, including:

* Replacing the original MLab-hosted database with a local MongoDB instance.
* Updating the MongoDB connection string for local development.
* Minor compatibility fixes required for modern browsers and tooling.

The application has intentionally not been migrated to a newer Angular version so that it remains representative of the original recruitment exercise.


## Node.js Version

This project was developed using **Node.js 12.22.12**.

If you use `nvm`, switch to the correct version with:

```bash
nvm use