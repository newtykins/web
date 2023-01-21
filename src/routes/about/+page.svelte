<script lang="ts">
    import IconButton from '$lib/IconButton.svelte';
    import Typewriter from '$lib/Typewriter.svelte';
    import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from 'svelte';
    import urls from '$lib/urls';
    import { faStar } from '@fortawesome/free-solid-svg-icons';
    import { get } from 'svelte/store';
    import { starred } from '$lib/stores/starred';
    import { recentlyPlayed } from '$lib/stores/recentlyPlayed';

    let repository = get(starred);
    let game = get(recentlyPlayed);
    const timestamp = new Date().getTime();

    if (timestamp > (repository?.expires || 0)) repository = null;
    if (timestamp > (game?.expires || 0)) game = null;

    onMount(async () => {
        // Most recently starred
        if (!repository) {
            await fetch('https://api.github.com/users/newtykins/starred')
                .then(res => res.json())
                .then((repos: any[]) => {
                    const [recentStar] = repos;

                    starred.set({
                        displayName: recentStar?.['full_name'],
                        url: `https://github.com/${recentStar?.['full_name']}`,
                        expires: new Date().getTime() + 3600000
                    });

                    repository = get(starred);
                });
        }

        // Most recently played
        if (!game) {
            await fetch(`${window.location.origin}/api/steam`)
                .then(res => res.json())
                .then(res => {
                    recentlyPlayed.set({
                        displayName: res?.gameName ?? 'unknown',
                        url: res?.url ?? 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        expires: Date.now() + 3600000
                    });

                    game = get(recentlyPlayed);
                });
        }
    });
</script>

<img src="/img/patches.png" width={250} alt="Patches says hello!" />

<Typewriter>
    <h1 class="animate__animated animate__bounceIn tracking-wider">Hey there, I'm newt!</h1>
</Typewriter>

<div class="space-y-5">
    <h2>I am a 16 year old mathematician and computer scientist.</h2>

    <h2>
        I spend a lot of my spare time coding, and I put most of it on <IconButton
            icon={faGithub}
            location={urls.github}
            classes="hover:text-github"
        /> <br />
        I most recently starred
        {#if repository}
            <Typewriter mode="cascade"
                ><a href={repository.url}>{repository.displayName}</a>!</Typewriter
            >
        {:else}
            ...
        {/if}
        <IconButton icon={faStar} location={repository?.url} classes="hover:text-yellow-400" />
    </h2>

    <h2>
        I also love playing videogames! <br />
        Most recently I have been playing
        {#if game}
            <Typewriter mode="cascade"><a href={game.url}>{game.displayName}</a>!</Typewriter>
        {:else}
            ...
        {/if} on <IconButton icon={faSteam} location={urls.steam} classes="hover:text-steam" />
    </h2>
</div>
