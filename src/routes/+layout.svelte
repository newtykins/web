<script lang="ts">
    import '../app.css';
    import 'animate.css';
    import Nav from '$lib/Nav.svelte';
    import { beforeNavigate } from '$app/navigation';
    import Footer from '$lib/Footer.svelte';

    beforeNavigate(nav => {
        console.log(nav);
    });
</script>

<div class="max-w-screen-lg mx-auto px-6 py-4 text-center">
    <Nav />
    <slot />
    <Footer />
</div>
