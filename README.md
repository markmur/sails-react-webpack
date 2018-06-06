# Sails + React + Webpack CLI

A CLI for scaffolding a [Sails](http://sailsjs.org) + [React](https://facebook.github.io/react/) boilerplate.

## Includes

- [Sails](http://sailsjs.org)
- [React](https://facebook.github.io/react/)
- [Babel](https://babeljs.io)
- [React Router](https://github.com/reactjs/react-router)
- [sails-hook-autoreload](https://github.com/sgress454/sails-hook-autoreload)
- [Sass](https://github.com/jtangelder/sass-loader)
- [Autoprefixer](https://github.com/passy/autoprefixer-loader)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)

---

### Install

Install the module globally:

```sh
$ npm install -g sails-react-webpack
```

---

### Generating a New Project

To generate a new project, run:

```sh
sails-react-webpack [project-name]

cd [project-name]

npm install

// or

yarn
```

---

### Run (development)

`npm start` will run all processes in the Procfile. It will start both Sails AND the Webpack Dev Server simultaneously.

```sh
npm start
```

To view your app, go to `http://localhost:3000` in your browser.

---

### Run (Production)

Webpack builds the bundle files on `postinstall` and sails is lifted the same way it's always lifted in production:

```sh
sails lift --prod
```

You can run this script manually with `npm run dist`.

---

### Generate Components

Use [react-component-gen](https://github.com/markmur/react-component-gen) to generate new components on the fly.
