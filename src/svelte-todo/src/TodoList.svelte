<script lang="ts">
	import Todo from "./Todo.svelte";
	import { TodoData } from "./TodoData";

	function newTodo(text: string, done: boolean = false) {
		return new TodoData(lastId++, text, done);
	}

	function addTodo() {
		todos = todos.concat(newTodo(todoText));
		clearTodoText();
	}

	function clearTodoText() {
		todoText = "";
	}

	function archiveCompletedTodos() {
		todos = todos.filter((td: TodoData) => !td.done);
	}

	function deleteTodo(todoId: number) {
		todos = todos.filter((td: TodoData) => todoId != td.id);
	}

	function toggleDone(todo: TodoData) {
		const { id } = todo;
		todos = todos.map((td) =>
			td.id === id ? { ...td, done: !td.done } : td
		);
	}

	let lastId: number = 0;
	let todoText: string = "";

	let todos = [
		newTodo("Learn Svelte", true),
		newTodo("Build a Coolio-Julio Svelte App", false),
	];

	$: incompleteCount = todos.filter((td: TodoData) => !td.done).length;
	$: status = `${incompleteCount} of ${todos.length} items remaining.`;
</script>

<div>
	<h1>To-Do List</h1>
	<div>
		{status}
		<button on:click={archiveCompletedTodos}>🗃 Archive Done</button>
	</div>
	<form on:submit|preventDefault>
		<input size="30" placeholder="What's cooking?" bind:value={todoText} />
		<button disabled={!todoText} on:click={addTodo}>➕ New</button>
	</form>
	<ul>
		{#each todos as todo}
			<Todo
				{todo}
				on:delete={() => deleteTodo(todo.id)}
				on:toggleDone={() => toggleDone(todo)}
			/>
		{/each}
	</ul>
</div>

<style>
	button {
		padding: 5px;
		margin-left: 10px;
	}
	ul {
		list-style-type: none;
		margin-left: 0px;
		padding-left: 0px;
	}
</style>
