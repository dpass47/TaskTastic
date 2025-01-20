<script setup>
import { ref, computed } from 'vue';
import TrashIcon from './icons/TrashIcon.vue';

const props = defineProps({
	tasks: Array,
});

const tasks = props.tasks;

const uncompletedTasks = computed(() => {
	return props.tasks.filter((t) => !t.completed);
});

const hoveredTask = ref(null);

function completeTask(id) {
	var selectedTask = tasks.findIndex((task) => task.id === id);
	tasks[selectedTask].completed = !tasks[selectedTask].completed;
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// function deleteTask() {}
</script>

<template>
	<ul>
		<li
			v-for="task in uncompletedTasks"
			:key="task.id"
			@mouseenter="hoveredTask = task"
			@mouseleave="hoveredTask = null">
			<div class="task-item">
				<div class="task-content">
					<input
						type="checkbox"
						@change="completeTask(task.id)" />
					{{ task.text }}
				</div>
				<Transition name="delete-button-transition">
					<button v-if="task === hoveredTask">
						<TrashIcon class="icon" />
					</button>
				</Transition>
			</div>
			<hr />
		</li>
	</ul>
</template>

<style scoped>
ul {
	margin: 0;
	padding: 0;
}

li {
	list-style-type: none;
	cursor: default;
}

.task-item {
	list-style-type: none;
	font-size: 1.2em;
	margin: 0.5em 0;
	display: flex;
	justify-content: space-between;
}

hr {
	border-bottom: 1px solid #fff;
	opacity: 0.1;
	margin: 0 auto;
}

button {
	border: none;
	background: none;
	outline: none;
	color: #fff;
}

button:hover {
	cursor: pointer;
}

.delete-button-transition-enter-active,
.delete-button-transition-leave-active {
	transition: all 300ms ease-in-out;
}

.delete-button-transition-enter-from,
.delete-button-transition-leave-to {
	opacity: 0;
}

.icon {
	color: var(--color-accent);
	width: 16px;
	height: 16px;
}
</style>
