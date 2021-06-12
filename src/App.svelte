<script lang="ts">
  import { Router, Link, Route } from "svelte-routing";
  import Modal from "svelte-simple-modal";
  import Nav from "./components/Nav.svelte";
  import HomePage from "./pages/Home.svelte";
  import SearchPage from "./pages/Search.svelte";
  import DetailPage from "./pages/Detail.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";
  export let url = "";
</script>

<Router {url}>
  <Modal>
    <SvelteToast />
    <Nav />
    <div class="container mx-auto px-4 mt-12 mb-6">
      <Route path="search" component={SearchPage} />
      <Route path="detail" component={DetailPage} />
      <Route path="/"><HomePage /></Route>
    </div>
  </Modal>
</Router>

<style>
</style>
