import React from 'react';

// interface Todo {
// 	text: string;
// 	complete: boolean;
// }

interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
	return (
		<li>
			<div className="form-check">
				<label
					className="form-check-label"
					style= {{
					textDecoration: todo.done ?
						'line-through' : undefined
					}}>
				<input
					type="checkbox"
					checked={todo.done}
					onClick={() => {
						toggleTodo(todo);
					}}
					/> {' '}
					{todo.content}
				</label>
			</div>
		</li>
	);
};

