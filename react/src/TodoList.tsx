import { TodoListItem } from './TodoListItem';

interface Props {
	todos: Todo[];
	toggleTodo: ToggleTodo;
	deleteTodo: DeleteTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo, deleteTodo }) => {
	return (
		<div className="list-wrapper">
			<ul className="d-flex flex-column-reverse todo-list">
				{todos.map(todo => (
					<TodoListItem
						key={todo.id}
						todo={todo}
						toggleTodo={toggleTodo}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</div>
	);
};
