import { createStore } from 'vuex'
const url = 'http://localhost:1337/api'

export default createStore({
	state: {
		products: null,
		categories: null,
		headerContent: null,
		pagination: null,
		posts: [],
	},
	mutations: {
		GET_PRODUCTS(state, products) {
			state.products = products
		},
		GET_PAGINATION(state, pagination) {
			state.pagination = pagination.pagination.pageCount
		},
		GET_CATEGORIES(state, categories) {
			state.categories = categories
		},
		GET_HEADER_CONTENT(state, headerContent) {
			state.headerContent = headerContent.attributes.body
		},
		GET_POSTS(state, posts) {
			state.posts = posts
		},
	},
	actions: {
		async getProducts({ commit }, page = 1) {
			const response = await fetch(
				`${url}/products?populate=*&&pagination[page]=${page}&&pagination[pageSize]=3`,
			)
			const products = await response.json()
			commit('GET_PRODUCTS', products)
			commit('GET_PAGINATION', products.meta)
		},
		async getCategories({ commit }) {
			const response = await fetch(`${url}/categories?populate-*`)
			const categories = await response.json()
			commit('GET_CATEGORIES', categories.data)
		},
		async filteredByCategory({ commit }, category) {
			const response = await fetch(
				`${url}/products?populate=*&&	filters[category][title][$eq]=${category}`,
			)
			const filteredProducts = await response.json()
			commit('GET_PRODUCTS', filteredProducts)
			commit('GET_PAGINATION', filteredProducts.meta)
		},
		async getHeaderContent({ commit }) {
			const response = await fetch(`${url}/navigation?populate=*`)
			const { data } = await response.json()
			commit('GET_HEADER_CONTENT', data)
		},
		async postLogin({ commit }, action) {
			try {
				const response = await fetch(`${url}/auth/local`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						identifier: action.email,
						password: action.password,
					}),
				})
				const { jwt, user } = await response.json()
				localStorage.setItem('userData', JSON.stringify(user))
				localStorage.setItem('token', jwt)
			} catch (e) {
				console.log('Ошибка авторизации', e)
			}
		},
		async postRegister({ commit }, action) {
			try {
				const response = await fetch(`${url}/auth/local/register`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: action.email,
						password: action.password,
						username: action.username,
					}),
				})
				const { jwt, user } = await response.json()
				localStorage.setItem('userData', JSON.stringify(user))
				localStorage.setItem('token', jwt)
			} catch (e) {
				console.log('Ошибка регистрации', e)
			}
		},
		async getPosts({ commit }) {
			const response = await fetch(`${url}/posts`, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${localStorage.getItem('token')}`,
				},
			})
			const { data } = await response.json()
			commit('GET_POSTS', data)
		},
	},
	modules: {},
})
