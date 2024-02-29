# W08D04 - End-to-End Testing with Cypress

### To Do
- [x] Jest vs Cypress
- [x] Install and Configure Cypress
- [x] Design End-to-End Tests with Cypress

### Jest vs Cypress
* Jest
  * Command line test runner
  * Based around testing `assertions`
  * Used for unit and integration testing (mostly)
* Cypress
  * Runs its own browser to execute the tests in
  * Performs operations and interacts with the site the way that a user would (eg. typing into input fields, clicking on buttons)
  * Used for integration and E2E testing (mostly)

### Install and Configure Cypress
* Cypress can be installed locally to the project (as a dev dependency) or globally on your OS

```bash
npm install -g cypress@9.7.0
npm install --save-dev cypress@9.7.0
```

* Use the `open` command to start Cypress running

```bash
# global installation
cypress open

# local installation
node_modules/.bin/cypress open
```

* Add a script to `package.json` for a quick way to start Cypress

```json
"cypress": "node_modules/.bin/cypress open"
```

```bash
npm run cypress
```

* We use the `cypress.json` file in the main directory to configure Cypress

```json
{
  "baseUrl": "http://localhost:3000",
  "viewportWidth": 1280,
  "viewportHeight": 1200
}
```

* `baseUrl` tells Cypress where our application is hosted and what port it's listening on
* `viewportWidth` and `viewportHeight` specify the dimensions for Cypress' browser to use
* Feel free to change the width and height values if developing for a mobile-first site

## Folders/Files and their Purposes!

* `/cypress.json`: Used to override default configuration values.
* `/cypress/fixtures`: Test data; often in JSON.
* `/cypress/integration`: Our test specifications.
* `/cypress/plugins`: Add-ons to expand on Cypress' functionality.
* `/cypress/support`: Scripts; an area where we can add on to Cypress if needed.

## Common Commands

* [describe(), it(), and beforeEach()](https://docs.cypress.io/guides/references/bundled-tools#Mocha) are afforded to us by Mocha.
    * Describe is used to, well, describe a block of tests!
    * It is used to label a specific test block / unit.
    * BeforeEach allows us an opportunity to add code/setup that will run before each text in the block.
* [cy.visit()](https://docs.cypress.io/api/commands/visit#Syntax) visits a web page.
* [cy.get()](https://docs.cypress.io/api/commands/get) Retrieves an HTML element based on jQuery/CSS-like selectors.
    * [<entity>.as()](https://docs.cypress.io/api/commands/as) Assign an alias for later use in cy.get() or cy.wait(), use an `@` in a selector to call upon an alias.
* [<element>.find()](https://docs.cypress.io/api/commands/find) Retrieves a child element from inside of a selected element.
* [cy.intercept()](https://docs.cypress.io/api/commands/intercept) Used for "spying" (checking for use of a particular request) or "stubbing" (replacing the response for a particular request.)
* [cy.wait()](https://docs.cypress.io/api/commands/wait) Waits before proceding with test instructions.
* [<element>.click()](https://docs.cypress.io/api/commands/click), [<element>.type()](https://docs.cypress.io/api/commands/type), [<element>.check()](https://docs.cypress.io/api/commands/check) are used to interact with elements and forms in a web page.

## Resources

* [Cypress (Official Website)](https://www.cypress.io/)
* [Cypress Assertion Commands Doc](https://example.cypress.io/commands/assertions)
* [`should` in Cypress](https://docs.cypress.io/api/commands/should)
* [(Chai) Assert in Cypress](https://docs.cypress.io/guides/references/assertions)
* Trouble in WSL2? [Follow the documentation carefully!](https://docs.cypress.io/guides/getting-started/installing-cypress#Windows-Subsystem-for-Linux)
    * WSL2 requires X-Server, which usually requires Firewall tweaks to get through! It allows your Linux to reach Windows and render the program's GUI (Electron app: Cypress GUI.)
* [End-to-End Web Testing with Cypress (O'Reilly Book)](https://www.oreilly.com/library/view/end-to-end-web-testing/9781839213854/)