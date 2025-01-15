import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/settings',
			name: 'settings',
			component: () => import('../views/SettingsView.vue'),
		},
		{
			path: '/calendar',
			name: 'calendar',
			component: () => import('../views/CalendarView.vue'),
		},
		{
			path: '/completed',
			name: 'completed',
			component: () => import('../views/CompletedTasksView.vue'),
		},
	],
});

export default router;
