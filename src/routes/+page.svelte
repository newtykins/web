<script lang="ts">
    import { onMount } from 'svelte';
    import { SkinViewer, WalkingAnimation } from 'skinview3d';
    import Typewriter from 'svelte-typewriter';

    let minecraftCanvas: HTMLCanvasElement;

    onMount(async () => {
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
    });
</script>

<canvas class="p-0 m-auto block" bind:this={minecraftCanvas} />

<Typewriter cursor={false} interval={40}>
    <h1 class="animate__animated animate__bounceIn">Hi, I'm newt!</h1>
</Typewriter>

<h2 class="leading-relaxed">
    Welcome to my home on the internet. <br />
</h2>
