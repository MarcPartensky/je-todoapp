interface Todo {
	id: int;
	content: string;
	done: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type DeleteTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
