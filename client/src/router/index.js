import { createRouter, createWebHistory } from 'vue-router'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/products',
			name: 'products',
			component: Products,
		},
		{
			path: '/about',
			name: 'about',
			component: About,
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
		},
	],
})

export default router
