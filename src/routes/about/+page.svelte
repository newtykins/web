<script lang="ts">
    import IconButton from '$lib/IconButton.svelte';
    import Typewriter from '$lib/Typewriter.svelte';
    import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from 'svelte';
    import urls from '$lib/urls';
    import { faStar } from '@fortawesome/free-solid-svg-icons';

    let repo: string;
    let repoUrl = '';

    let game: string;
    let gameUrl = '';

    onMount(async () => {
        // Most recently starred
        await fetch('https://api.github.com/users/newtykins/starred')
            .then(res => res.json())
            .then((repos: any[]) => {
                const [recentStar] = repos;
                repo = recentStar?.['full_name'];
                repoUrl = `https://github.com/${repo}`;
            })

        // Most recently played
        await fetch(`${window.location.origin}/api/steam`)
            .then(res => res.json())
            .then(res => {
                game = res?.gameName || 'unknown';
                gameUrl = res?.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
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
        I spend a lot of my time on GitHub <IconButton icon={faGithub} location={urls.github} classes='hover:text-github' /> <br/>
        I most recently starred <IconButton icon={faStar} location={repoUrl} classes='hover:text-yellow-400' />
        {#if repo}
            <Typewriter mode='cascade'><a href={repoUrl}>{repo}</a>!</Typewriter>
        {/if}
    </h2>

    <h2>
        I love playing videogames! <br/>
        In fact, my most recently played game on <IconButton icon={faSteam} location={urls.steam} classes='hover:text-steam' /> is
        {#if game}
            <Typewriter mode='cascade'><a href={gameUrl}>{game}</a>!</Typewriter>
        {/if}
    </h2>
</div>
