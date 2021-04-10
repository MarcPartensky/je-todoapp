import { TodoListItem } from './TodoListItem';

interface Props {
	todos: Todo[];
	toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
	return (
		<div className="list-wrapper">
			<ul className="d-flex flex-column-reverse todo-list">
				{todos.map(todo => (
					<TodoListItem
						key={todo.text}
						todo={todo}
						toggleTodo={toggleTodo}
					/>
				))}
			</ul>
		</div>
	);
};
