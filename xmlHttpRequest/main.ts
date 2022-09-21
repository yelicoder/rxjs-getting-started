import {Observable} from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element
// https://rxjs.dev/api/index/function/fromEvent
// The first argument of .fromEvent can be a DOM EventTarget
// EventTarget is the parent of all of the HTML element
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
let click = Observable.fromEvent(button, "click");
                       

function load(url: string) {
  let xhr = new XMLHttpRequest();

  //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
  // "load" event is fired when the request transaction completes successfully
  xhr.addEventListener("load", () => {
    let movies = JSON.parse(xhr.responseText);
    movies.forEach(m => {
      let div = document.createElement("div");
      div.innerText = m.title;
      output.appendChild(div);
    });
  });

  //initialize the request
  xhr.open("GET", url);

  //Send the request
  xhr.send();
  
}

// https://rxjs.dev/api/index/class/Observable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// e is a PointerEvent that is emitted after the button is clicked
// this PointerEvent is the argument of the arrow function e=>
// However load ("movies.json") does not need this argument
//https://rxjs.dev/api/index/function/fromEvent
// Every time resulting Observable is subscribed, 
//event handler function will be registered to event target 
//on given event type. When that event fires, value passed as a first argument to 
//registered function will be emitted by output Observable. 
// in this case the values passed as the first argument to the registered 
// function is a PointerEvent

click.subscribe(
    e => {
      load("movies.json"),
      console.log(e)
    },
    e => console.log(`error: ${e}`),
    () => console.log("complete")
)

