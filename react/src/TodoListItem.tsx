import React from 'react';

// interface Todo {
// 	text: string;
// 	complete: boolean;
// }

interface Props {
	todo: Todo;
	toggleTodo: ToggleTodo;
	deleteTodo: DeleteTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo, deleteTodo}) => {
	return (
		<li>
			<div className="form-check">
				<label
					className="form-check-label"
					style= {{
					textDecoration: todo.done ?
						'line-through' : undefined
					}}>
					{todo.content}

				<input
					type="checkbox"
					className="checkbox"
					checked={todo.done}
					onClick={() => {
						toggleTodo(todo);
					}}
					/>
				  <i className="input-helper"></i>

			</label>
			</div>
			<i onClick={() => deleteTodo(todo)} className="remove mdi mdi-close-circle-outline"></i>
		</li>
	);
};

