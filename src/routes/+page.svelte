<script lang="ts">
    import { onMount } from 'svelte';
    import { SkinViewer, WalkingAnimation } from 'skinview3d';
    import Typewriter from 'svelte-typewriter';
    import truncate from 'lodash.truncate';

    import Fa from 'svelte-fa'
    import { faMusic } from '@fortawesome/free-solid-svg-icons';

    let minecraftCanvas: HTMLCanvasElement;
    $: song = '';
    let url = '';

    const updateSong = async () => {
        const data = await fetch(`${window.location.origin}/api/spotify`)
            .then(res => res.json());

        if (data.message) {
            song = 'nothing at the moment!';
        } else {
            song = truncate(`${data.artists[0].name} - ${data.name}`, {
                length: 120,
                omission: '...'
            });
            url = data.url;
        }
    }

    onMount(async () => {
        // Skin renderer
        let skin = `${window.location.origin}/minecraft/skin.png`;
        let cape = `${window.location.origin}/minecraft/cape.png`;

        const skinViewer = new SkinViewer({
            canvas: minecraftCanvas,
            width: 400,
            height: 400,
            skin,
            cape,
            animation: new WalkingAnimation(),
            nameTag: 'newtykins',
            zoom: 0.75
        });

        skinViewer.controls.enableZoom = false;

        await updateSong();

        setInterval(updateSong, 10000);
    });
</script>

<head>
    <title>newt!</title>
</head>

<canvas class="p-0 m-auto block" bind:this={minecraftCanvas} />

<Typewriter cursor={false} interval={40}>
    <h1 class="animate__animated animate__bounceIn">Hi, I'm newt!</h1>
</Typewriter>

<h2 class="leading-relaxed">
    Welcome to my home on the internet. <br />
    
    <Fa icon={faMusic} class='inline pr-1' size='sm' />
    <Typewriter cursor={false} interval={40} element='span'>
        <a href={url} class="hover:underline">{song}</a>
    </Typewriter>
</h2>
