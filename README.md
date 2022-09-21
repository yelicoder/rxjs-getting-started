# rxjs-getting-started
Getting Started with Reactive Programming with RxJs by Scott Allen PluralSight
### Dev environment setup
#### pre-requsit
npm

#### configuration
1. configuration typescript compiler: tsconfig.json
```
{
    "compilerOptions": {
        "target": "es6",
        "module": "commonjs",
        "sourceMap": true
    }
}
```
2. configuration webpack: webpack.config.js
```
module.exports = {
    devtool: "eval-source-map",
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
    },
    mode: 'development'
}
```
 output: the final .js file that can be loaded in index.html
 module: any file ends in .ts extension is to use the loader "ts-loader". webpack can take the resulting .js file and bundle it with app.js

#### configuration the following script in package.json
```
"scripts": {
    "start": "webpack-dev-server --watch --inline",
    "postinstall": "typings install"
  }
  ```

#### run the application
1. delete node_modules
2. npm install
3. npm run start

#### Projects
1. hello: basic to check the build and configuration 
2. observer: simple observable and observer
3. easierObserver: observer using arrow function
4. observableCreate: using Observable.create
5. observableCreateWithError: Observable.create with error emitted
6. async: use timeout to simulate async observable
7. mapOperator: map operator example
8. filterOperator: filter operator example
9. reduceJSSize: import only the needed library to reduce the size of the app.js. Was 3.7M. Put cursor in "rxjs" and press F12 to open Rx.d.ts. When importing from just rxjs/Observable, the app.js size reduced to 969kb. The got exception for map function. Fixed it by importing rxjs/add/operator/map and /rxjs/add/operator/filter. The size of app.js is now 1M. We can import rxjs during development phase and fix the import before moving to testing region
10. mouseEvent: Observable.fromEvent to capture all mouse moving event
11. mouseEventWithMapOperator: map opeartor applied to mouse move event
12. mouseEventWithFilterOperator: filter operator applied to mouse move envent
13. trackMouse: track mouse move as a circle
14. trackMouseDelay: track mouse move with a delay
15. xmlHttpRequest: using xmlHttpRequest to load movies. fromEvent.
16. httpResponseAsObservable: returns from xmlHttpRequest as Observable. Other options: Promise, call back function. rxjs solution is observable. click returns Observable
17. flatMapObservableResponse: click returns object
18. renderMoviesWithFlatMap
19. loadBeingLazy: load without subscribe does not do anything.
20. loadBeingSubscribed: load is subscribed. Movies are rendered as soon as the page load




### References
reactives.io
https://github.com/marcus4guyen/RxJS-GettingStarted-Pluralsight
https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e
https://webpack.js.org/configuration/devtool/
http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
