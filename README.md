# orange

A custom URL shortener.

## Setup

### Node.js

In order to run this project you will need Node.js. The version is described in `package.json` file, 
under `"engines"."node"`.

I recommend you use Node Version Manager, since it is easier to manage different Node.js versions, 
if you have some other projects:

Windows: https://github.com/coreybutler/nvm-windows

Linux / macos: https://github.com/nvm-sh/nvm

### Packages

This project uses specific libraries:

Package management: npm

Development: TypeScript, Express.js

Bundling: Rollup

Code linting and formatting: Eslint, Prettier.

### Installation

Run `npm install` to install all packages.

## Running the application

Run `npm run build` to build the application from TypeScript to JavaScript.

After that run `npm run start` in order to run the backend.

There are also some additional scripts for checking ESLint errors or Prettier, please look them up
in `package.json's` `"scripts"` section. 
