import { useState } from "react";



function App() {

  function addTodo() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill both fields!');
      return;
    }

    const todosContainer = document.getElementById("todosContainer");
    const todoDiv = document.createElement("div");

    todoDiv.innerHTML = `
    <h2>${title}</h2>
    <h4>${description}</h4>
    `

    todosContainer.appendChild(todoDiv)

    document.getElementById("title").value = '';
    document.getElementById("description").value = '';
  }
  return <div>
    <input id='title' type="text" placeholder="Enter the title" /><br />
    <input id='description' type="text" placeholder="Enter the description" /><br />
    <button onClick={addTodo}>Add Todo</button><br />
    <div id="todosContainer">

    </div>
  </div>
}

export default App