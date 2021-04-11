// import './bootstrap.min.css';
// import './font-awesome.css';
import './index.css';

import { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';
import url from './config';

// const header = new Headers();
// header.append('Access-Control-Allow-Origin', '*');
// header.append('Referrer-Policy', 'origin');
// Referrer Policy: strict-origin-when-cross-origin


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
				setTodos(todos => [...todos, ...data]);
				// initialTodos.concat(data);
				// initialTodos.push(...data);
				// console.log(initialTodos);
		});
	}, []);


	const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {

    const requestOptions = {
        method: 'PUT',
        headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `content=${selectedTodo.content}&done=${!selectedTodo.done}`
    };

		const newTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {
					...todo,
					done: !todo.done,
				};
			}
			return todo;
		});

    fetch(url + `/todo/${selectedTodo.id}`, requestOptions)
        .then(response => console.log(response));

		setTodos(newTodos);
	};

	const addTodo: AddTodo = (content: string) => {
		const newTodo = { content: content, done: false };

    const requestOptions = {
        method: 'POST',
        headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: `content=${content}&done=0`
    };

    fetch(url + "/todo/create", requestOptions)
        .then(response => response.json())
				.then(function (id: Number) {
					console.log(id);
					setTodos([...todos, {id, ...newTodo}]);
				})
				.catch((error) => {
					console.error('Error:', error);
				});

	}

	const deleteTodo: DeleteTodo = (selectedTodo: Todo) => {

    const requestOptions = {
        method: 'DELETE',
        headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: ''
    };

		const newTodos = todos.filter(todo => todo !== selectedTodo)
    fetch(url + `/todo/${selectedTodo.id}`, requestOptions)
        .then(response => console.log(response));

		setTodos(newTodos);
	};

	return (
		<div className="container">
			<div className="page-content page-container" id="page-content">
				<div className="padding">
					<div className="row container d-flex justify-content-center">
						<div className="col-md-12">
							<div className="card px-3">
								<div className="card-body">
									<h4 className="card-title">Awesome Todo list</h4>
									<AddTodoForm addTodo={addTodo} />
									<TodoList
										todos={todos}
										toggleTodo={toggleTodo}
										deleteTodo={deleteTodo}
									/>
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
