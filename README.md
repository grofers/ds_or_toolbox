# Atlas UI Starter Template

This is a template repository for bootstrapping web dashboard projects(based on [React](https://reactjs.org/) & [Atlas UI](https://github.com/grofers/atlas-ui) for Grofers Supply Chain teams).

Use this template repository to quickly get started with a react based web dashboard project. This template has a few bare essentials setup to quickly get up & running, while providing the flexibility to modify parts of the application as needed.

_NOTE: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)_

## Scripts Available

- `npm start`: Start the project in development mode by running a local server to edit and see the changes locally
- `npm run build`: Bundle the application for use in production. This command generates a `build` directory which contains static files that can be served by a web server in production
- `npm test`: Run unit tests in watch mode to run the tests while watching the related files for changes
- `npm test:debug`: Run the tests in debug mode to debug a test
- `npm run cy:open`: Run [Cypress](https://www.cypress.io/) integration tests in a browser. Use this command to see/write/debug integration tests
- `npm run cy:run:chrome`: Run [Cypress](https://www.cypress.io/) integration tests in Chrome headless mode
- `npm run cy:run:firefox`: Run [Cypress](https://www.cypress.io/) integration tests in Firefox headless mode
- `npm run serve`: Runs a local web server by serving the `build` directory. Use this command after building your application, primarily for running/writing integration tests
- `npm run eject`: Use this command to [eject the application](https://create-react-app.dev/docs/available-scripts/#npm-run-eject) to change advanced configuration. Run this only if you know what you are doing


## Configurations

### Notes about using [Atlas UI](https://github.com/grofers/atlas-ui)

[Atlas UI](https://github.com/grofers/atlas-ui) is Grofers Supply Chain team's own Design System library. This library is already defined as a dependency of this project. To use this, you'll have to update the `@atlas/core` dependency in [package.json](./package.json) as below:

```json
"@atlas/core": "git+https://<your-github-token>:x-oauth-basic@github.com/grofers/atlas-ui.git"
```

where `<your-github-token>` is your [Github token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) needed to access Atlas UI, since it is a private package.

**Recommended**:
Append a release version to the package as shown below:

```json
"@atlas/core": "git+https://<your-github-token>:x-oauth-basic@github.com/grofers/atlas-ui.git#<release-version-tag>"
```

where `<release-version-tag>` is the release tag of Atlas UI. You can find all the releases [here](https://github.com/grofers/atlas-ui/releases). Specifying the release/version tag is NOT mandatory, but is the **recommended approach**. Otherwise, the latest master version will be used which may possibly break your project.

_Note: We are working on moving the project to Github packages after which this package can be used without a token_
