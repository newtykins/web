<script lang="ts">
    import IconButton from '$lib/IconButton.svelte';
    import Typewriter from '$lib/Typewriter.svelte';
    import { faSteam } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from 'svelte';
    import urls from '$lib/urls';

    let game: string;
    let url = '';

    onMount(async () => {
        await fetch(`${window.location.origin}/api/steam`)
            .then(res => res.json())
            .then(res => {
                game = res?.gameName || 'unknown';
                url = res?.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            })
    })
</script>

<img src="/img/patches.png" class="mb-10" alt="Patches says hello!" />

<Typewriter>
    <h1 class="animate__animated animate__bounceIn tracking-wider">Hey there, I'm newt!</h1>
</Typewriter>

<div class='space-y-5'>
    <h2>I am a 16 year old mathematician and computer scientist.</h2>

    <h2>
        I love playing videogames! <br/>
        In fact, my most recently played game on <IconButton icon={faSteam} location={urls.steam} classes='hover:text-steam' /> is
        {#if game}
            <Typewriter mode='cascade'><a href={url}>{game}</a>!</Typewriter>
        {/if}
    </h2>
</div>
