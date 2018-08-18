import TodoService from "./todo-service.js";



let todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function getTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(drawTodos)
}

function drawTodos(todos) {
let template = ''
for(let i = 0; i < todos.length; i++){
	const todo = todos[i];
	template += `
	<div class="todos text-center">
	<input type="checkbox" onclick="app.controllers.todoController.updateTodo('${todo._id}')">
	<p> ${todo.description}</p>
	<button onclick="app.controllers.todoController.deleteTodo('${todo._id}')" class="w3-tiny">delete</button>
	</div>
	`

}
document.getElementById('count').innerText = todos.length
document.getElementById('todo').innerHTML = template
}

// You will need four methods
// getTodos should request your api/todos and give an array of todos to your callback fn
// addTodo takes in a todo and posts it to the server
// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
// removeTodo takes in a todoId and sends a delete request to the server
// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


export default class TodoController {
	constructor() {
		todoService.getTodos(drawTodos)
	}


	addTodoFromForm(e) {
		e.preventDefault()
		let form = e.target

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(form, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		form.reset()
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId)
		// YEP THATS IT FOR ME
	}

	deleteTodo(todoId) {
	
	todoService.deleteTodo(todoId, drawTodos)
	}

// updateTodo(todoId){
// 	todoService.updateTodo(todoId)
// }

}
