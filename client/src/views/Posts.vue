<template>
	<div class="posts__wrapper">
		<div v-for="post in posts" :key="post.id">
			<h2>{{ post.attributes.title }}</h2>
			<p>{{ post.attributes.desciption }}</p>
		</div>
	</div>
</template>

<script setup>
	import { computed } from '@vue/runtime-core'
	import { useStore } from 'vuex'

	const store = useStore()
	store.dispatch('getPosts')
	const posts = computed(() => store.state.posts)
</script>

<style></style>
