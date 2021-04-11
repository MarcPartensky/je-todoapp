import { useState } from 'react';

interface Props {
	addTodo: AddTodo;
}


export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
	const [text, setText] = useState('');

	return (
		<div className="add-items d-flex">
				<input
					type="text"
					className="form-control todo-list-input"
					placeholder="What to do?"
					value={text}
					onChange={e => {
						setText(e.target.value);
					}}
				>
				</input>

				<button
					className="add btn btn-primary font-weight-bold todo-list-add-btn"
					type="submit"
					onClick={e => {
						e.preventDefault();
						addTodo(text);
						setText('');
					}}
				>
					Add Todo
				</button>
		</div>
	);
};
