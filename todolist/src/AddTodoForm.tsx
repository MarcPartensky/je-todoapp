import { useState } from 'react';

interface Props {
	addTodo: AddTodo;
}


export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
	const [text, setText] = useState('');

	return (
		<div className="add-items d-flex">
			<form>
				<input
					type="text"
					className="form-control todo-list-input"
					placeholder="What do you need to do today?"
					value={text}
					onChange={e => {
						setText(e.target.value);
					}}
				>
					<button
						className="add btn btn-primary font-weight-bold todo-list-add-btn"
						type="submit" onClick={e => {
							e.preventDefault();
							addTodo(text);
							setText('');
						}}
					>
						Add Todo
					</button>
				</input>
			</form>
		</div>
	);
};
