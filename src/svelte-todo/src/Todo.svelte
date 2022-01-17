<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fade } from "svelte/transition";
    import type { TodoData } from "./TodoData.js";

    export let todo: TodoData;

    const dispatch = createEventDispatcher();
</script>

<div style="display: flex; align-items: center;">
    <label for="{todo.id}-todo">
        <li class="todo-item" transition:fade>
            <input
                id="{todo.id}-todo"
                type="checkbox"
                checked={todo.done}
                on:change={() => dispatch("toggleDone")}
                style="width: 10%;"
            />
            <span style="width: 80%;" class={"done-" + todo.done}>
                {todo.text}
            </span>
            <button class="delete-item" on:click={() => dispatch("delete")}>
                🗑
            </button>
        </li>
    </label>
</div>

<style>
    .todo-item {
        width: 450px;
        padding: 10px;
        background-color: #fafafa;
        display: flex;
        align-items: center;
        border-radius: 5px;
    }
    .done-true {
        color: gray;
        text-decoration: line-through;
    }
    .delete-item {
        border: none;
        background-color: transparent;
        margin-top: 3px;
        float: right;
    }
    li {
        margin-top: 5px;
    }
</style>
