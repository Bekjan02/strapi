<script setup>
	import Categories from '../components/Categories.vue'
	import { computed, ref } from '@vue/reactivity'
	import { useStore } from 'vuex'
	import Paginate from 'vuejs-paginate-next'
	import { onMounted } from '@vue/runtime-core'

	const store = useStore()

	onMounted(() => {
		store.dispatch('getPosts')
		store.dispatch('getProducts')
	})
	const products = computed(() => store.state.products)
	const pageCount = computed(() => store.state.pagination)
	const posts = computed(() => store.state.posts)

	const changePage = (count) => {
		store.dispatch('getProducts', count)
	}
</script>

<template>
	<Categories />
	<div class="row">
		<div class="product__item" v-for="product in products?.data" :key="product.id">
			<div class="product__img">
				<img
					:src="'http://localhost:1337' + product.attributes.src.data.attributes.url"
					:alt="product.attributes.src.data.attributes.alternativeText"
				/>
			</div>
			<div class="product__info">
				<span>{{ product.attributes.name }}</span>
				<p class="product__description">
					{{ product.attributes.description }}
				</p>
				<span>{{ product.attributes.price }} сом</span>
			</div>
		</div>
	</div>

	<paginate
		:page-count="pageCount"
		:click-handler="changePage"
		:prev-text="'Prev'"
		:next-text="'Next'"
		:container-class="'pagination__wrap'"
		page-class="'page-item'"
		page-link-class="'link-item'"
		active-class="'pag__active'"
	>
	</paginate>

	<div class="posts__wrapper">
		<div v-for="post in posts" :key="post.id">
			<h2>{{ post.attributes.title }}</h2>
			<p>{{ post.attributes.desciption }}</p>
		</div>
	</div>
</template>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin-top: 40px;
	}
	.product__item {
		font-size: 20px;
		max-width: 292px;
		display: flex;
		align-items: center;
		flex-direction: column;
		text-align: left;
		height: 455px;
	}
	.product__description {
		font-size: 14px;
	}
	.product__img {
		width: 292px;
		height: 292px;
	}
	.product__info {
		text-align: left;
	}
	ul {
		list-style: none;
	}
	.pagination__wrap {
		display: flex;
		background: #334845;
		gap: 20px;
		justify-content: center;
	}
	.page-item {
		color: white;
		display: block;
	}
	.pag__active {
		color: green;
	}
	.link-item {
		cursor: pointer;
	}
</style>
