<script lang="ts">
    import IconButton from '$lib/components/IconButton.svelte';
    import Typewriter from '$lib/components/Typewriter.svelte';
    import { faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';
    import { onMount } from 'svelte';
    import urls from '$lib/urls';
    import { faStar } from '@fortawesome/free-solid-svg-icons';
    import { recentlyStarred, type Starred } from '$lib/stores/recentlyStarred';
    import { recentlyPlayed, type Game } from '$lib/stores/recentlyPlayed';

    let starred: Starred;
    let game: Game;

    onMount(async () => {
        starred = await recentlyStarred;
        game = await recentlyPlayed;
    });
</script>

<img src="/img/patches.png" width={250} alt="Patches says hello!" />

<Typewriter>
    <h1 class="animate__animated animate__bounceIn tracking-wider mb-5">Hey there, I'm newt!</h1>
</Typewriter>

<div class="space-y-5">
    <h2>I am a 16 year old mathematician and computer scientist.</h2>

    <h2>
        I spend a lot of my spare time coding, and I put most of it on <IconButton
            label="GitHub"
            icon={faGithub}
            location={urls.github}
            classes="hover:text-github"
        /> <br />
        I most recently starred
        {#if starred}
            <a href={starred.url}>{starred.displayName}</a>!
        {:else}
            ...
        {/if}
        <IconButton
            label="Star"
            icon={faStar}
            location={starred?.url}
            classes="hover:text-yellow-400"
        />
    </h2>

    <h2>
        I also love playing videogames! <br />
        Most recently I have been playing
        {#if game}
            <a href={game.url}>{game.displayName}</a>!
        {:else}
            ...
        {/if} on <IconButton
            label="Steam"
            icon={faSteam}
            location={urls.steam}
            classes="hover:text-steam"
        />
    </h2>
</div>
