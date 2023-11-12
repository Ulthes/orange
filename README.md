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

## Tests

Unit tests are built using Mocha + Chai. We are using Typescript through `ts-node` package.

### Do note
We are using `"experimental-specifier-resolution=node"` flag, which allows us to use ES Modules `import/export` functionality.
In future NodeJS (as to my knowledge) will be supported out-of-the-box, so then (and only then) you can remove this flag.

You can run unit test by invoking `npm run test`.

In order to utilize unit tests more to your needs please do note that project has a Mocha configuration file **.mocharc.json**, 
where you can utilize Mocha more to your needs.