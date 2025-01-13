<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HamburgerIcon from './icons/HamburgerIcon.vue';

function buttonClick() {
	console.log('button clicked');
}
</script>

<template>
	<div class="navbar-container">
		<div class="navbar-menu">
			<button @click="buttonClick">
				<HamburgerIcon />
			</button>
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/settings">Settings</RouterLink>
			</nav>
		</div>
		<h1>TaskTastic</h1>

		<RouterView />
	</div>
</template>

<style scoped>
.navbar-container {
	display: flex;
	padding: 1em;
}

.navbar-menu {
	display: flex;
	place-items: center;
	flex-direction: row-reverse;
}

button {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;
	color: var(--color-accent);
	background: none;
	border: none;
}

h1 {
	margin-left: 0.25em;
}

button:hover {
	cursor: pointer;
}

nav {
	display: flex;
	flex-direction: column;
	display: none;
}
</style>
