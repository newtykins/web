<script lang="ts">
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';

    import '../app.css';
    import 'animate.css';
    import Nav from '$lib/Nav.svelte';
    import Footer from '$lib/Footer.svelte';
</script>

<div class="max-w-screen-lg mx-auto px-10 lg:px-6 py-4 text-center">
    <Nav />
    {#key $page.url}
        <div in:fade={{ duration: 300 }}>
            <slot />
        </div>
    {/key}
    <Footer />
</div>
