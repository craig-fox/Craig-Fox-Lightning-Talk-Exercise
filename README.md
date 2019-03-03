# Craig Fox Lightning Tal kExercise

##Setup
I chose to use the latest version of Angular to develop this, as I felt it would give me the most 
amenable development environment. I used Angular CLI to generate the scaffolding for the application.
For the back end, I created an internal NodeJS app that communicates with a MongoDB database created
on MLab. As the people testing this code might not have Angular CLI installed, the commands below 
for running the app differ from the ones in package.json, which use **ng**.

The code for the Angular application is under `src`, with scaffolding files in the root and the
component & service code under `src/app`.
The code for the Node backend consists of `server.js` in the project root, which accesses code in the 
`backend` directory.

## Running the app
Run **npm install** to generate the required artifacts.

Run **npm run backend** to launch the NodeJS server for database access.

In a separate console, run **npm start** to launch the Angular Application, and navigate the browser
to `http://localhost:4200/`

##Decisions made
I chose to create two components, one for submitting a topic proposal, and the other for viewing
proposals. These are displayed within a `router-outlet` element, with buttons in the root component
(app-component) toggling between each state.

I chose to use Reactive Forms for the `topic-proposal` form, so that the logic for data handling could
be contained in the form class (`topic-proposal.component.ts`)

## Running unit tests
Run **npm run test** to execute the unit tests. This launches Karma in a separate browser window.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

