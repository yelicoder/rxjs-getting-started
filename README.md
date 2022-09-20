# rxjs-getting-started
Getting Started with Reactive Programming with RxJs by Scott Allen PluralSight
### Dev environment setup
#### pre-requsit
npm

#### installation of tools
1. use npm init to create package.json
2. npm install rxjs --save
3. npm install webpack-cli webpack webpack-dev-server typescript typings ts-loader --save-dev
this is to install compilers, transpilers and module bundling tool
4. node_modules/.bin/typings install dt~es6-shim --global --save

#### configuration
1. configuration typescript compiler: tsconfig.json
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": true
    }
}

2. configuration webpack: webpack.config.js
module.exports = {
    entry: "./main",
    output: { filename: "app.js" },
    module: {
        rules: [
            {
                test: /.ts$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}
 output: the final .js file that can be loaded in index.html
 module: any file ends in .ts extension is to use the loader "ts-loader". webpack can take the resulting .js file and bundle it with app.js

#### configuration the following script in package.json
"scripts": {
    "start": "webpack-dev-server --static-watch",
    "postinstall": "typings install"
  }

#### run the application
npm start


### References
reactives.io
