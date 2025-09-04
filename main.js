import "./style.css";
import { renderTodoForm } from "./component/todoForm/todoForm";
import { renderTodoList } from "./component/todoList/todoList";

async function renderTodos() {
  const app = document.querySelector("#app");
  app.innerHTML = "";
  app.appendChild(renderTodoForm());
  app.appendChild(await renderTodoList());
}

renderTodos();

document.addEventListener("todosUpdated", renderTodos);