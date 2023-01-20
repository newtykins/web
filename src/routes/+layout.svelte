<script lang="ts">
    import '../app.css';
    import 'animate.css';
    import Nav from '$lib/Nav.svelte';
    import { beforeNavigate } from '$app/navigation';
    import Footer from '$lib/Footer.svelte';
    import { fade } from 'svelte/transition';
    import { page } from '$app/stores';

    beforeNavigate(nav => {
        console.log(nav);
    });
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
