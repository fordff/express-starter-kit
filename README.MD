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