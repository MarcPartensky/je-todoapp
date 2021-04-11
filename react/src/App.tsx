import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const url = process.env.SPRING_API_URL || "marcpartensky.com:8080";

const initialTodos: Todo[] = [];
fetch(url)
	.then((response) => response.json())
	.then((data) => {
		initialTodos.push(...data);
});

// import 'express';
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

function App() {
	const [todos, setTodos] = useState(initialTodos);


	const toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {
					...todo,
					done: !todo.done,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (content: string) => {
		const newTodo = { content, done: false };
		setTodos([...todos, newTodo]);
	}

	return (
		<div className="container">
			<div className="page-content page-container" id="page-content">
				<div className="padding">
					<div className="row container d-flex justify-content-center">
						<div className="col-md-12">
							<div className="card px-3">
								<div className="card-body">
									<h4 className="card-title">Awesome Todo list</h4>
									<TodoList todos={todos} toggleTodo={toggleTodo} />
									<AddTodoForm addTodo={addTodo} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
