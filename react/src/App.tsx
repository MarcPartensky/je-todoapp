import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';


import url from './config';

// import 'express';
// var app = express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
const initialTodos: Todo[] = [];

// function fetchTodos(todos: Todo[], setTodos) {
// 	fetch(url + "/todo/all")
// 		.then((response) => response.json())
// 		.then((data) => {
// 			setTodos([...todos, ...data]);
// 			// initialTodos.concat(data);
// 			// initialTodos.push(...data);
// 			// console.log(initialTodos);
// 	});
// }

function App() {
	const [todos, setTodos] = useState(initialTodos);
	useEffect(() => {
		fetch(url + "/todo/all")
			.then((response) => response.json())
			.then((data) => {
				setTodos([...todos, ...data]);
				// initialTodos.concat(data);
				// initialTodos.push(...data);
				// console.log(initialTodos);
		});
	}, []);


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

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(selectedTodo)
    };

    fetch(url + `/todo/${selectedTodo.id}`, requestOptions)
        .then(response => response.json())
				.then(function (data: Todo[]) {
					console.log(data);
					setTodos(newTodos);
				}.bind(todos));
	};

	const addTodo: AddTodo = (content: string) => {
		const newTodo = { content: content, done: false };
		console.log(newTodo);

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newTodo)
    };

    fetch(url + "/todo/create", requestOptions)
        .then(response => response.json())
				.then(function (data: Todo[]) {
					console.log(data);
					setTodos([...todos, newTodo]);
				}.bind(todos));

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
