<script setup>
	import { ref } from '@vue/reactivity'
	import { useRouter } from 'vue-router'
	import { useStore } from 'vuex'
	const store = useStore()
	const router = useRouter()

	const email = ref()
	const password = ref()

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('adadwa')
		const userInfo = {
			email: email.value,
			password: password.value,
		}
		store.dispatch('postLogin', userInfo)
		router.push('/products')
	}
</script>

<template>
	<div class="auth">
		<form @submit.prevent="handleSubmit" action="" class="form">
			<input v-model="email" class="input" type="email" placeholder="email" />
			<input v-model="password" class="input" type="password" placeholder="password" />
			<button class="auth__btn">Войти</button>
		</form>
	</div>
</template>

<style>
	.auth__btn {
		padding: 8px 40px;
		border-radius: 10px;
		box-sizing: border-box;
		margin-top: 10px;
		cursor: pointer;
	}
	.auth {
		position: fixed;
		top: 50%;
		left: 50%;
		background: #7b5b5b;
		padding: 20px;
		transform: translate(-50%, -50%);
		border-radius: 10px;
	}
	.input {
		width: 100%;
		outline: none;
		border: none;
		padding: 8px;
		border-radius: 7px;
		margin-top: 5px;
	}
	.login {
		color: white;
	}
</style>
