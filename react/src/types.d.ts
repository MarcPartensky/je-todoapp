interface Todo {
	content: string;
	done: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;
type AddTodo = (text: string) => void;
