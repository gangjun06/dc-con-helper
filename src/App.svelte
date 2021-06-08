<script lang="ts">
	import { Router, Link, Route } from "svelte-routing";
	import Nav from "./components/Nav.svelte";
	import HomePage from "./pages/Home.svelte";
	import SearchPage from "./pages/Search.svelte";
	import DetailPage from "./pages/Detail.svelte";
	export let url = "";
</script>

<Router url="{url}">
	<Nav />
	<div class="container">
		<Route path="search" component={SearchPage} />
		<Route path="detail" component={DetailPage} />
		<Route path="/"><HomePage /></Route>
	</div>
</Router>

<style>
</style>
