import { Observable } from "rxjs";
// Promises

export function loadWithFetch(url: string){
    return Observable.defer(() => {
      return Observable.fromPromise(fetch(url).then(r => {
        if (r.status === 200 ) {
          return r.json();
        } else {
          return Promise.reject(r);
        }
      }));
  }).retryWhen(retryStrategy());
}
  
  export function load(url: string) {
    return Observable.create(observer => {
      let xhr = new XMLHttpRequest();
      
      let onLoad = () => {
        if (xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          observer.next(data);
          observer.complete();
        } else {
          observer.error(xhr.statusText);
        }
      }

      xhr.addEventListener("load", onLoad);
       
  
      xhr.open("GET", url);
      xhr.send();

      return () => {
        xhr.removeEventListener("load", onLoad);
        console.log("unsubscribed");
        xhr.abort();
      }
    }).retryWhen(retryStrategy({attempts: 3, delay: 1500}));
  }
  
  export function retryStrategy({attempts =4, delay=1000} = {}) {
    return function(errors) {
      return errors
              .scan((acc, value) => {
                acc += 1;
                if (acc <attempts) {
                  return acc;
                } else {
                  throw new Error(value)
                }
              }, 0)
              .delay(delay);
    }
  }