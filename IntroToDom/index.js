/*
?   DOM
        - Document Object Model
        - Only through the browser
?   Frame
        - Document: HTML Page (in the browser)
            - document is a global variable
        - Object: Elements and comments (nodes)
        - Model: Arrangement
    - Data representation of objects that comprise the structure and content of a document on the web
?   BOM
        - Browser Object Model
        - "window" - global variable
        - various methods available
*/

// console.log("test");

function askForStuff() {
  prompt();
}

// askForStuff();

console.log(document);
console.log(document.URL);
console.log(document.location);
document.title = "first lesson intro to dom";
console.log(document.title);

let h1 = document.createElement("h1");

/*
      Our variable now has access to our various properties
          - innerHTML : can inject a block of HTML code
          - innerText: returns visible text of contained in a node
          - textContent: returns the full text in a node
      ex:
          <p>Hello<b>World</b></p>
              - innerText - return the word "Hello"
              - textContent - return "Hello World"
  */

h1.textContent = "Creating my first DOM element";

document.body.appendChild(h1);

h1.style.color = "red";

document.body.style.backgroundColor = "gray";

let color = "pink";

h1.style = `
      text-shadow: 2px 2px 2px black;
      color: ${color};
      text-align: center;
  `;
h1.className = "h1-class-name";
h1.id = "set-id";

console.log(h1);

/*
  ?   Finding Elements
  
  *   HTMLCollection
          - Array like object
          - Allows access to index, properties, and methods to help navigate and modify
          - Does NOT allow to modify a group of elements all at once
          - Can loop through it
          - Can use the .length property to get the size of the list
  
      Accessing multiple elements requires these methods:
          - getElementsByTagName()
          - querySelectorAll()
          - getElementsByClassName()
  */

let li = document.getElementsByTagName("li");
console.log(li);

let bathroom = li[0];
bathroom.style.color = "red";

for (element of li) {
  element.style.color = "green";
}
/*
  ?   querySelector()
      - Grabs the first instance of an element or null if nothing was found
      - Can target by ID, Class, or Element
          - Will need to append # for ID
          - Will need to append . for class
  */

let firstLi = document.querySelector("li");
// console.log(firstLi);

let listTitle = document.querySelector("#listTitle");
// console.log(listTitle);
listTitle.style.textAlign = "center";

let toDoList = document.querySelector("#toDoList");
// console.log(toDoList);

let classListItem = document.querySelector(".listItem");
// console.log(classListItem);

/*
  ?   querySelectorAll()
          - Will return back a static node list (an array) of elements
  */

let nodeListLi = document.querySelectorAll("li");
nodeListLi[0].style.color = "blue";

let newListItem = document.createElement("li");
let ul = document.getElementById("ulToDo");

newListItem.textContent = "New Item";

ul.appendChild(newListItem);

/*
  ?   Event Listeners
  
      Allows us to execute a function when an event occurs
  
      .addEventListener()
          - DOM node method
          - Require an event to 'listen' for, or type and a callback function
  
  */

let btn = document.getElementById("submit");
let input = document.getElementById("listInput");

function addItem() {
  let newItem = document.createElement("li");
  newItem.textContent = input.value;
  newItem.style.color = "blue";
  ul.appendChild(newItem);
}

btn.addEventListener("click", addItem);
