import NewTodo from "../../models/newtodo.js"
import Todo from "../../models/todo.js"

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/rhianon/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}


let todoList = []

export default class TodoService {
	updateTodo(todoId) {
// i need to change this to dosomething
	}

	getTodos(draw) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????
				let todos = res.data.data.map(rawTodo => {
					return new Todo(rawTodo)
				})
				draw(todos)
			})
			.catch(logError)
	}

	addTodo(formData, getTodosFromController) {
		let newTodo = new NewTodo(formData)
		todoApi.post('', newTodo)
			.then(res => { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				getTodosFromController()
				
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		let todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	deleteTodo(todoId, draw) {
		// Umm this one is on you to write.... The method is a DELETE

		todoApi.delete(todoId, draw)
			.then(res => {
				this.getTodos(draw)
			})

	}


}
