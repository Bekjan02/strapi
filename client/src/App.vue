<script setup>
	import { RouterLink, RouterView } from 'vue-router'
	import Header from './components/Header.vue'
</script>

<template>
	<Header />
	<div class="wrapper">
		<RouterView />
	</div>
</template>
 
<style>
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		position: relative;
		font-weight: normal;
		border: none;
		outline: none;
	}

	.wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px 0;
	}

	body {
		min-height: 100vh;
		color: rgba(235, 235, 235, 0.64);
		background: #181818;
		transition: color 0.5s, background-color 0.5s;
		line-height: 1.6;
		font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		font-size: 15px;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	img {
		max-width: 100%;
	}

	.col-3 {
		width: 25%;
	}
</style>
