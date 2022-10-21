<script setup>
	import { ref } from '@vue/reactivity'
	import { useRouter } from 'vue-router'
	import { useStore } from 'vuex'
	const store = useStore()
	const router = useRouter()

	const email = ref()
	const password = ref()
	const username = ref()

	const handleSubmit = (e) => {
		e.preventDefault()
		const userInfo = {
			email: email.value,
			password: password.value,
			username: username.value,
		}
		store.dispatch('postRegister', userInfo)
		router.push('/products')
	}
</script>

<template>
	<div class="auth">
		<form @submit.prevent="handleSubmit" action="" class="form">
			<input v-model="username" class="input" type="text" placeholder="username" />
			<input v-model="email" class="input" type="email" placeholder="email" />
			<input v-model="password" class="input" type="password" placeholder="password" />
			<button class="auth__btn">Зарегистрироваться</button>
		</form>
	</div>
</template>

<style></style>
