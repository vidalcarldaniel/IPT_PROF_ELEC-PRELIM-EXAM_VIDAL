import { addTodo } from "../../api/todoApi";
import "./todoForm.css";

export function renderTodoForm() {
    const form = document.createElement("form");
    form.className = "todo-form";

    form.innerHTML = `
        <input type="text" placeholder="Enter a new todo" required />
        <button type="submit">Add</button>
    `;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = form.querySelector("input");
        if (input.value.trim() !== "") {
            await addTodo(input.value);
            input.value = "";
            const event = new Event("todoAdded");
            document.dispatchEvent(event);
        }
    });
    return form;
}