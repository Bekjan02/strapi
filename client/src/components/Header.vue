<template>
	<header class="header">
		<nav class="header__nav">
			<RouterLink v-for="item in headerItems" :key="item.id" class="header__link" :to="item.path">
				<span v-if="item.label"> {{ item.label }} </span>
				<img v-else :src="'http://localhost:1337' + item.src" alt="" />
			</RouterLink>
		</nav>
		<div class="header__auth">
			<RouterLink class="header__link" to="/login">login</RouterLink>
			<RouterLink class="header__link" to="/register">Register</RouterLink>
		</div>
		<button @click="logout" class="header__link">Logout</button>
	</header>
</template>

<script setup>
	import { computed, onMounted, ref, watch, watchEffect } from '@vue/runtime-core'
	import { useStore } from 'vuex'
	const store = useStore()
	store.dispatch('getHeaderContent')
	const isAuthed = ref(false)

	// onMounted(() => {
	// 	isAuthed.value = localStorage.getItem('token') ? true : false
	// 	console.log(isAuthed)
	// })
	onMounted(() => {
		console.log(isAuthed.value)
	})
	const headerItems = computed(() => store.state.headerContent)
	const logout = () => {
		localStorage.removeItem('token')
		localStorage.removeItem('userData')
	}
	watchEffect(isAuthed, () => {
		isAuthed.value = localStorage.getItem('token') ? true : false
		console.log(isAuthed)
	})
</script>

<style scoped>
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.header__nav {
		display: flex;
		gap: 20px;
		align-items: center;
	}
	.header__auth {
		display: flex;
		gap: 20px;
	}
	.header__img {
		max-width: 250px;
	}
	.header__link {
		text-decoration: none;
		color: rgba(235, 235, 235, 0.64);
		font-size: 30px;
		cursor: pointer;
		background: transparent;
	}
	.router-link-active {
		color: green;
	}
</style>
