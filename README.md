# rxjs-getting-started
Getting Started with Reactive Programming with RxJs by Scott Allen PluralSight
### Dev environment setup
#### pre-requsit
npm

#### start from scratch
1. npm init
2. npm install rxjs --save
3. npm install webpack webpack-cli webpack-dev-server typescript typings ts-loader --save-dev
4. node_modules/.bin/typings install dt~es6-shim --global --save


#### configuration
1. configuration typescript compiler: tsconfig.json
```

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

### Projects
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
16. httpResponseAsObservable: returns from xmlHttpRequest as Observable. Other options: Promise, call back function. rxjs solution is observable. click returns Observable. map from one observable to another
17. flatMapObservableResponse: click returns object. flatMap map from one observable to the data emitted from the other observable. In other words, it maps from one observable to another and then subscribe to the second.
18. renderMoviesWithFlatMap
19. loadBeingLazy: load without subscribe does not do anything.
20. loadBeingSubscribed: load is subscribed. Movies are rendered as soon as the page load
21. errorCondition: loading the wrong file name to simulate a 404 condition. Has Uncaught SyntaxError
22. handleErrorCondition: add error checking in load event and log error in console
23. retry: retry operator on Observable
24. retryWhen: infinit loop
25. retryWhenDelay: delayed infinit loop.
26. retryWithCounting: scan operator
27. retryStrategy: takeWhile operator
28. retryStrategyWithPar: parameterized
29. observableWithPromise
30. observableWithPromiseDirectLoad: fetch is not lazy loading. movies.json is loaded when loading the screen without being subscribed
31. observableWithPromiseLazyLoad: using Observable.defer, the fetch is not immediately called. Switch betweeen the loadWithFetch with or without subscribe to see the difference
32. unCaughError: observer subscribe not passing the argument for observable's error. error is an unhandled excdeption. Uncaught error will show on console
33. errorHandling: subscribe has error handlingcd 
34. throwError: error handling in subscribe displayed error in console. Throw error will cause unCaughtError and "Unreachable code detected". Throw error simulates the errors that was not expected
35. observableMerge: use merge to create observable
36. throwOperator: Obserbable.throw (new Error (".....")) when creating Observable can be handled when subscribed
37. onErrorResumeNextOperator: this operator will enable the Observable to ignore the error and continue to emit the values. 
38. catchOperator: catch operator can catch the error, log it and continue 
39. rejectPromise: use Promise.reject when fetch is not successful. the uncaught exception has a response object
40. rejectPromiseWithErrorHandler: error displayed in the console
41. retryOnPromise: only trying to process the promise not to retry the network call
42. retryOnObservable: retry the network operation
43. propagateErrorAfterRetry: make sure observer got the error after retry. The throw operation in retryWhen is inside try/catch block. So throw new error works here
44. subscription: subscribe to an observable generate a subscriber handle
45. unsubscribe: unsubscribe will call the returned function that the observable returns
46. retryAutoUnsubscribe: retry will automatically unsubscribe










### References
1. reactives.io
2. https://github.com/marcus4guyen/RxJS-GettingStarted-Pluralsight
3. https://stackoverflow.com/questions/61767538/devtools-failed-to-load-sourcemap-for-webpack-node-modules-js-map-http-e
4. https://webpack.js.org/configuration/devtool/
http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html
5. https://fetch.spec.whatwg.org/
6. Operators: https://reactivex.io/documentation/operators.html#categorized
7. Operators decision tree: https://reactivex.io/documentation/operators.html#tree



