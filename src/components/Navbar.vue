<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import HamburgerIcon from './icons/HamburgerIcon.vue';
import HomeIcon from './icons/HomeIcon.vue';
import SettingsIcon from './icons/SettingsIcon.vue';
import CalendarIcon from './icons/CalendarIcon.vue';
import CheckmarkIcon from './icons/CheckmarkIcon.vue';

const navbarToggle = ref(false);
</script>

<template>
	<Transition name="fade">
		<header v-show="!navbarToggle">
			<button @click="navbarToggle = !navbarToggle">
				<HamburgerIcon />
			</button>
			<h1>TaskTastic</h1>
		</header>
	</Transition>

	<Transition name="navbar-transition">
		<nav v-show="navbarToggle">
			<div class="navbar-header">
				<h1>TaskTastic</h1>
				<button @click="navbarToggle = !navbarToggle">X</button>
			</div>
			<ul class="navbar-links-container">
				<li>
					<RouterLink
						to="/"
						class="navbar-link"
						><HomeIcon class="icon" /> Home</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/calendar"
						class="navbar-link">
						<CalendarIcon class="icon" /> Calendar</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/completed"
						class="navbar-link">
						<CheckmarkIcon class="icon" /> Completed
						Tasks</RouterLink
					>
				</li>
				<li>
					<RouterLink
						to="/settings"
						class="navbar-link">
						<SettingsIcon class="icon" /> Settings</RouterLink
					>
				</li>
			</ul>
		</nav>
	</Transition>
</template>

<style scoped>
/* Header */
header {
	display: flex;
	padding: 1em;
	place-items: center;
}

h1 {
	font-size: 2em;
	font-weight: 500;
}

header h1 {
	margin-left: 0.25em;
}

/* Navbar Button */

button {
	display: flex;
	place-items: center;
	place-content: center;
	width: 32px;
	height: 32px;
	font-size: 1em;
	color: var(--color-accent);
	background: none;
	border: 1px solid var(--color-accent);
	border-radius: 0.5em;
	transition: all ease-in-out 300ms;
}

button:hover {
	cursor: pointer;
	color: #fff;
}

/* Navbar Menu */

nav {
	display: flex;
	flex-direction: column;
	position: absolute;
	background-color: #272727;
	top: 0px;
	left: 0px;
	padding: 1em;
	width: 300px;
	border-bottom-right-radius: 0.5em;
	outline: 1px solid #5e5e5e;
}

.navbar-header {
	display: flex;
	margin-bottom: 1em;
	justify-content: space-between;
	place-items: center;
}

ul {
	padding: 0;
}

li {
	list-style-type: none;
}

.navbar-link {
	color: #fff;
	text-decoration: none;
	padding: 0.5em 0 0.5em 0.5em;
	border-radius: 0.5em;
	transition: all ease-in-out 200ms;
	display: flex;
	place-items: center;
}

.navbar-link:hover {
	background-color: rgba(100, 100, 100, 0.2);
}

.icon {
	height: 16px;
	width: 16px;
	margin-right: 0.5em;
	color: #fff;
}

/* transitions */

.navbar-transition-enter-active,
.navbar-transition-leave-active {
	transition: all 300ms ease-in-out;
}

.navbar-transition-enter-from,
.navbar-transition-leave-to {
	transform: translateX(-300px);
}

.fade-enter-active,
.fade-leave-active {
	transition: all 300ms ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>
