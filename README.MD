- [Docker][docker], [Node.js][node], [Yarn][yarn], [JavaScript][js], [Babel][babel], [Flow][flow], [Prettier][prettier] — core platform and dev tools
- [Express][express], [Passport.js][passport], [session][session], [flash][flash], [cors][cors] etc. — common HTTP-server features
- [GraphQL.js][gqljs], [GraphQL.js Relay][gqlrelay], [DataLoader][loader], [validator][validator] — [GraphQL][gql] schema and API endpoint
- [PostgreSQL][pg], [Redis][redis], [Knex][knex], [pg][nodepg] — SQL, document, key/value data store; data acess and migrations
- [Nodemailer][mailer], [Handlebars][hbs], [Juice][juice] — transactional email and email templates /w layout support
- [I18next][i18next], [I18next Middleware][i18nextmid], [I18next Backend][i18nextback] — localization and translations
- [Jest][jest] - unit and snapshot testing


## Prerequisites

* [Docker][docker] Community Edition v17 or higher
* [VS Code][code] editor (preferred) + [Project Snippets][vcsnippets],
  [EditorConfig][vceditconfig], [ESLint][vceslint], [Flow][vcflow], and [Prettier][vcprettier]
  plug-ins.

## Getting Started

Just clone the repo and run `docker-compose up`:

Mocha will be our test runner which is responsible for encapsulating our tests in test suites (describe-block) and test cases (it-block). Furthermore test runners like Mocha offer an API to run all tests from a command line interface. Let's dive into it: First, install an additional Babel package for your Node.js application which makes our tests understand Babel enabled JavaScript code:

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

Chai will be our assertion library to run equality checks or other test related scenarios. It enables you to compare expected results against actual results (e.g. expect X to be true). First, let's install it on the command line as dependency for our project:

```
version: '3.1'

services:
  express-starter-kit:
    image: express-starter-kit
    build: .
    ports:
      - 3000:3000
    links:
      - mongo
  mongo:
    image: mongo:4.2
    ports:
      - 27017:27017
    volumes:
      - ./db-notes-mongo:/data/db
```
