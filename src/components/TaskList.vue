<script setup>
import { ref } from 'vue';

const props = defineProps({
	tasks: Array,
});

const hoveredTask = ref(null);
</script>

<template>
	<ul>
		<li
			v-for="task in props.tasks"
			:key="task.id"
			@mouseenter="hoveredTask = task"
			@mouseleave="hoveredTask = null">
			{{ task.text
			}}<Transition name="delete-button-transition">
				<button v-if="task === hoveredTask">X</button>
			</Transition>
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
	font-size: 1.2em;
	margin-bottom: 0.5em;
	cursor: default;
	display: flex;
	justify-content: space-between;
}

span {
	border: 2px solid magenta;
}

button {
	margin-left: 0.75em;
	border: 1px solid var(--color-accent);
	border-radius: 50%;
	height: 24px;
	width: 24px;
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
</style>
