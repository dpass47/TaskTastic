<script setup>
import { ref } from 'vue';
import Navbar from '../components/Navbar.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';

const taskList = ref('');
</script>

<template>
	<main>
		<Navbar />
		<div class="tasks-container">
			<div class="new-task-container">
				<input
					type="text"
					v-model="taskList"
					placeholder="Add a new task..."
					class="new-task-input" />
				<button class="new-task-button">
					<PlusIcon class="icon" />
				</button>
			</div>
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
	width: 90%;
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
