# Sails + React + Webpack boilerplate

A boilerplate for (Sails)[http://sailsjs.org] apps with a React frontend.

Clone:
```shell
git clone https://github.com/markmur/sails-react-webpack.git
cd sails-react-webpack
npm install
```

Run (development):

There are multiple ways to run the project in development as sails and webpack-dev-server run independently. The easiest way is to use Foreman (`npm install -g foreman`) and run:

```shell
nf start
```

This will start all processes listed in the `Procfile`. 

To view your app, go to `http://localhost:3000` in your browser.

Run (Production):

Wepack builds the bundle files on `postinstall` and sails is lifted the same way it's always lifted in production:

```shell
sails lift --prod
```

You can also manually run webpack with `npm run dist`.

## Includes

* sails-hook-autoreload
* Sass
* Autoprefixer
* React Hot Loader
* Babel with ES2015
* React Router
