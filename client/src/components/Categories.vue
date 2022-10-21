<script setup>
	import { computed, ref } from '@vue/reactivity'
	import { useStore } from 'vuex'
	const store = useStore()
	store.dispatch('getCategories')

	const categories = computed(() => store.state.categories)

	const handleClick = (title) => {
		store.dispatch('filteredByCategory', title)
	}

	const getAll = () => {
		store.dispatch('getProducts')
	}
</script>

<template>
	<div class="buttons">
		<button @click="getAll" class="">all</button>
		<button
			@click="handleClick(categori.attributes.title)"
			v-for="categori in categories"
			:key="categori.id"
		>
			{{ categori.attributes.title }}
		</button>
	</div>
</template>

<style scoped>
	.buttons {
		display: flex;
		align-items: center;
		gap: 20px;
	}
	button {
		padding: 10px;
		border: none;
		border-radius: 10px;
		background: bisque;
		width: 16%;
		cursor: pointer;
	}
</style>
