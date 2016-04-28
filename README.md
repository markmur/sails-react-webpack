# Sails + React + Webpack boilerplate

A boilerplate for [Sails](http://sailsjs.org) apps with a [React](https://facebook.github.io/react/) frontend.

## Includes

* [Sails](http://sailsjs.org) v0.12.2
* [React](https://facebook.github.io/react/) v15.0.1
* [Babel with ES2015](https://babeljs.io)
* [React Router](https://github.com/reactjs/react-router)
* [sails-hook-autoreload](https://github.com/sgress454/sails-hook-autoreload)
* [Sass](https://github.com/jtangelder/sass-loader)
* [Autoprefixer](https://github.com/passy/autoprefixer-loader)
* [React Hot Loader](https://github.com/gaearon/react-hot-loader)


___

### Clone

```shell
git clone https://github.com/markmur/sails-react-webpack.git
cd sails-react-webpack
npm install
```

___

### Run (development)

There are multiple ways to run the project in development as sails and webpack-dev-server run independently. The easiest way is to use [Foreman](https://github.com/theforeman/foreman) (`npm install -g foreman`) and run:

```shell
nf start
```

This will start all processes listed in the `Procfile`.

To view your app, go to `http://localhost:3000` in your browser.
___

### Run (Production)

Wepack builds the bundle files on `postinstall` and sails is lifted the same way it's always lifted in production:

```shell
sails lift --prod
```

You can also manually run webpack with `npm run dist`.

___

### Generate Components

A simple bash script has been added to the bin folder to quickly create react components with test files.

To run, execute:

```
./bin/comp.sh (name)
```

This will create a folder for the component in `assets/components` with two files inside:
- {ComponentName}.jsx
- {ComponentName}.test.js

___

### Testing

To run the react tests using jest: 
```shell
npm test
```
