<script setup>
import { reactive, ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import TaskList from '@/components/TaskList.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';

const newTask = ref('');
const tasks = reactive(
	localStorage.getItem('tasks')
		? JSON.parse(localStorage.getItem('tasks'))
		: []
);

function addTask() {
	tasks.unshift({
		id: Date.now(),
		text: newTask.value,
		completed: false,
	});
	localStorage.setItem('tasks', JSON.stringify(tasks));
	newTask.value = '';
}
</script>

<template>
	<main>
		<Navbar />
		<div class="tasks-container">
			<div class="new-task-container">
				<input
					type="text"
					v-model="newTask"
					placeholder="Add a new task..."
					class="new-task-input"
					@keyup.enter="newTask && addTask()" />
				<button
					class="new-task-button"
					@click="addTask">
					<PlusIcon class="icon" />
				</button>
			</div>
			<TaskList :tasks="tasks" />
		</div>
	</main>
</template>

<style scoped>
.tasks-container {
	width: 80%;
	margin: 0.5em auto 0;
}

.new-task-container {
	width: 100%;
	display: flex;
	place-content: center;
	place-items: center;
	margin-bottom: 1em;
}

.new-task-input {
	background: #272727;
	border-radius: 0.5em;
	border: none;
	outline: none;
	color: #fff;
	padding: 0.5em;
	width: 100%;
	font-size: 1.2em;
	margin-right: 0.5em;
	caret-color: var(--color-accent);
	transition: all 300ms ease-in-out;
}

.new-task-input:focus {
	outline: 1px solid var(--color-accent);
}

.new-task-button {
	border: 2px solid var(--color-accent);
	background: none;
	color: var(--color-accent);
	border-radius: 50%;
	width: 32px;
	height: 32px;
	display: flex;
	place-items: center;
	place-content: center;
	transition: all 300ms ease-in-out;
}

.new-task-button:hover {
	color: #fff;
	cursor: pointer;
}
</style>
