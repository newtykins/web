<script lang="ts">
	import { onMount } from "svelte";
	import { SkinViewer, WalkingAnimation } from 'skinview3d';
	import { concurrent } from 'svelte-typewriter';

	let minecraftCanvas: HTMLCanvasElement;

	onMount(async () => {
		let skin = `${window.location.origin}/minecraft/skin.png`;
		let cape = `${window.location.origin}/minecraft/cape.png`;

		const skinViewer = new SkinViewer({
			canvas: minecraftCanvas,
			width: 350,
			height: 350,
			skin,
			cape,
			animation: new WalkingAnimation(),
			nameTag: 'newtykins',
			zoom: 0.75
		});

		skinViewer.controls.enableZoom = false;
	})
</script>

<canvas class="p-0 m-auto block w-8" bind:this={minecraftCanvas} />
<h1 class="animate__animated animate__bounceIn" use:concurrent={{ interval: 40 }}>Hi, I'm newt!</h1>

<h2 class="leading-relaxed mb-0">
	Welcome to my home on the internet. <br/>
</h2>
