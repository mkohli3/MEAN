document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        let list = document.getElementById("list");
        data.forEach((todo) => {
          let li = document.createElement("li");
          li.textContent = todo.title;
          list.appendChild(li);
  
          let span = document.createElement("SPAN");
          let txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.onclick = function () {
            let li = this.parentElement;
            li.style.display = "none";
          };
          span.appendChild(txt);
          li.appendChild(span);
        });
      });
  
    document.getElementById("form").addEventListener("submit", function (event) {
      event.preventDefault();
      newElement();
    });
  });
  
  function newElement() {
    let inputValue = document.getElementById("input").value;
    if (inputValue === "") {
      alert("You must write something!");
      return;
    }
  
    let li = document.createElement("li");
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
  
    document.getElementById("todos").appendChild(li);
    document.getElementById("input").value = "";
  
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.onclick = function () {
      let li = this.parentElement;
      li.style.display = "none";
    };
    span.appendChild(txt);
    li.appendChild(span);
  }