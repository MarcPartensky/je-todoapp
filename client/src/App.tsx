import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos: Todo[] = [
	{
		text: 'Walk the dog',
		complete: false,
	},
	{
		text: 'Write app',
		complete: true,
	}
];

function App() {
	const [todos, setTodos] = useState(initialTodos);

	const toggleTodo = (selectedTodo: Todo) => {
		const newTodos = todos.map(todo => {
			if (todo === selectedTodo) {
				return {
					...todo,
					complete: !todo.complete,
				};
			}
			return todo;
		});
		setTodos(newTodos);
	};

	const addTodo: AddTodo = (text: string) => {
		const newTodo = { text, complete: false };
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
