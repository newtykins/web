<script lang="ts">
    import { onMount } from 'svelte';
    import { SkinViewer, WalkingAnimation } from 'skinview3d';
    import Typewriter from '$lib/components/Typewriter.svelte';

    import Icon from 'svelte-fa';
    import { faMusic } from '@fortawesome/free-solid-svg-icons';
    import { recentlyStarred } from '$lib/stores/recentlyStarred';
    import { recentlyPlayed } from '$lib/stores/recentlyPlayed';

    let minecraftCanvas: HTMLCanvasElement;
    $: song = '...';
    let url = '/';

    const updateSong = async () => {
        const data = await fetch(`${window.location.origin}/api/spotify`).then(res => res.json());

        if (data.message) {
            song = 'I am not listening to anything at the moment!';
            url = '';
        } else {
            song = `${data.artists[0].name} - ${data.name}`;
            url = data.url;
        }
    };

    onMount(async () => {
        // Skin renderer
        let skin = `${window.location.origin}/minecraft/skin.png`;
        let cape = `${window.location.origin}/minecraft/cape.png`;

        const skinViewer = new SkinViewer({
            canvas: minecraftCanvas,
            width: 300,
            height: 400,
            skin,
            cape,
            animation: new WalkingAnimation(),
            nameTag: 'newtykins',
            zoom: 0.75
        });

        skinViewer.controls.enableZoom = false;

        // Music stuff
        await updateSong();
        setInterval(updateSong, 5000);

        // Try and cache the data on the about page before it is needed
        await recentlyStarred;
        await recentlyPlayed;
    });
</script>

<canvas class="inline w-80 h-96 bg-slate-100" bind:this={minecraftCanvas} />

<Typewriter>
    <h1 class="animate__animated animate__pulse">Hi, I'm newt!</h1>
</Typewriter>

<h2 class="mb-12">
    Welcome to my home on the internet. <br />

    <Icon icon={faMusic} class="inline pr-1" size="sm" />
    <a href={url}>{song}</a>
</h2>
