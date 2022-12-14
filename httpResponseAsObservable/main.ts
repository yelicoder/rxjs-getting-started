import { Observable } from "rxjs";

let output = document.getElementById("output");
let button = document.getElementById("button");

let click = Observable.fromEvent(button, "click");


function load(url: string) {
  return Observable.create(observer => {
    let xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      let data = JSON.parse(xhr.responseText);
      observer.next(data);
      observer.complete();
    });

    xhr.open("GET", url);
    xhr.send();
  });
}

function renderMovies(movies) {
  movies.forEach(m => {
    let div = document.createElement("div");
    div.innerText = m.title;
    output.appendChild(div);
  });
}

// the map operator below maps the click event
// to an observable returned by load function
// the observable returned by load function is then subscribed
click.map( e=> load("movies.json")).subscribe(o => console.log(o));


// click.subscribe(
//   e => load("movies.json"),
//   e => console.log(`error: ${e}`),
//   () => console.log("complete")
// )

