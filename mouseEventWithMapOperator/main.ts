import {Observable} from "rxjs";

let source = Observable.fromEvent(document, "mousemove")
                       .map((e: MouseEvent) => {
                         return {
                           x: e.clientX,
                           y: e.clientY
                         }
                       }) ;

//.map(n => n*2)
  //.filter(n => n>4);

source.subscribe(
    value => console.log(value),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
)

