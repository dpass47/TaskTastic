<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HamburgerIcon from './icons/HamburgerIcon.vue';

const navbarToggle = ref(false);
</script>

<template>
	<div class="navbar-container">
		<div
			class="navbar-menu"
			v-show="!navbarToggle">
			<button @click="navbarToggle = !navbarToggle">
				<HamburgerIcon />
			</button>
		</div>
		<h1>TaskTastic</h1>
		<RouterView />
	</div>
	<nav v-show="navbarToggle">
		<div class="navbar-header">
			<h1>TaskTastic</h1>
			<button @click="navbarToggle = !navbarToggle">X</button>
		</div>
		<div class="navbar-links-container">
			<RouterLink
				to="/"
				class="navbar-link"
				>Home</RouterLink
			>
			<RouterLink
				to="/settings"
				class="navbar-link"
				>Settings</RouterLink
			>
		</div>
	</nav>
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
	border: 2px solid magenta;
}

button {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;
	color: var(--color-accent);
	background: none;
	border: 1px solid var(--color-accent);
	border-radius: 0.5em;
	transition: all ease 500ms;
}

button:hover {
	cursor: pointer;
	box-shadow: inset 100px 0 0 0 #272727;
}

h1 {
	margin-left: 0.25em;
}

nav {
	display: flex;
	flex-direction: column;
	/* justify-content: space-between; */
	margin-right: 2em;
	position: absolute;
	background-color: #272727;
	top: 0px;
	left: 0px;
	padding: 1em;
	width: 300px;
	border-bottom-right-radius: 0.5em;
}

nav h1 {
	margin: 0;
	padding: 0;
}

nav button:hover {
	color: white;
}

.navbar-links-container {
	display: flex;
	flex-direction: column;
	/* border: 2px solid magenta; */
	width: 100%;
}

.navbar-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
