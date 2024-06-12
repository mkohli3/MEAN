const baseUrl = "https://jsonplaceholder.typicode.com";
const todopath = "todos#";

function getTodo(url) {
  return new Promise((res, rej) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        res({
          json: () => JSON.parse(xhttp.response),
        });
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  });
}

function renderList(data) {
  const ul = document.getElementById("todos");
  console.log(data);
  data.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.title;
    ul.appendChild(li);
  });
}

getTodo("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => {
    renderList(json);
  });

function newElement() {
  let inputValue = document.getElementById("myInput").value;
  if (inputValue === "") {
    alert("You must write something!");
    return;
  }

  let ul = document.getElementById("todos");
  let li = document.createElement("li");
  li.textContent = inputValue;

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
  };
  span.appendChild(txt);
  li.appendChild(span);

  ul.appendChild(li);
  document.getElementById("myInput").value = "";
}
