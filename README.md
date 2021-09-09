# AcmeValue

This is an application to showcase architecture and implementation ideas given a particular business problem.

## Quick start

Be sure to create an `.env` file and fill it with values under keys found in `.env.example`.

In the terminal run:
`yarn install && yarn start`

To start E2E tests run:
`yarn cypress`

To start integration tests run: 
`yarn test`

## Libraries used
#### Code standardization 
* ESLint
* Prettier

Rationale: Prettier and ESlint work great together providing automatic code formatting and best practice rule enforcement.
They are the industry standard for React application and for good reason.

#### Routing
* React Router

Rationale: A very simple and popular router that has modern React (hooks) support and a concise API.

#### Style
* Styled Components

Rationale: CSS-in-JS is my preferred way of styling React applications.

#### Input libraries
* React Datepicker
* React Hook Form

Rationale: Working with dates is no easy task and React Datepicker is a neat, quite pretty, and most importantly simple to use solution to date inputs.
React Hook Form, while not idiomatic to React principles, is a minimalistic, very performant, and easy to use form library.

#### Testing
* Cypress
* Mock Service Worker
* React Testing Library

Rationale: Cypress is a very popular and effective tool that makes writing integration tests a breeze. MSW is also a great way to stub APIs
and have consistent results when testing either integration or unit tests.
