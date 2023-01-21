<script lang="ts">
    import Typewriter from '$lib/Typewriter.svelte';
    import { onMount } from 'svelte';
    import IconButton from '$lib/IconButton.svelte';
    import { faArrowLeft, faArrowRight, faShuffle } from '@fortawesome/free-solid-svg-icons';

    const videoCount = 18;
    let origin: string;

    $: number = 0;

    const randomiseVideo = () => {
        let newNumber = number;

        while (newNumber === number) {
            newNumber = 1 + Math.floor(Math.random() * (videoCount - 1)); // 1-8
        }

        number = newNumber;
    };

    const previousVideo = () => {
        number -= 1;

        if (number <= 0) {
            number = videoCount;
        }
    };

    const nextVideo = () => (number = (number % videoCount) + 1);

    onMount(() => {
        origin = window.location.origin;
        randomiseVideo();
    });
</script>

<Typewriter>
    <h1>You found the treasure!</h1>
</Typewriter>

<h2>Now enjoy this video, you deserve it (:</h2>

<a href={`${origin}/shhh/${number}.mp4`} download>
    <h3 class="my-3 hover:underline">Video {number}/8</h3>
</a>

<div class="space-x-5">
    <IconButton
        icon={faArrowLeft}
        action={previousVideo}
        iconSize="1.5x"
        classes="text-gray-600 hover:text-slate-900"
    />
    <IconButton
        icon={faShuffle}
        action={randomiseVideo}
        iconSize="1.5x"
        classes="text-gray-600 hover:text-slate-900"
    />
    <IconButton
        icon={faArrowRight}
        action={nextVideo}
        iconSize="1.5x"
        classes="text-gray-600 hover:text-slate-900"
    />
</div>

<div class="flex justify-center mt-5">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video src={`${origin}/shhh/${number}.mp4`} width={500} height={500} autoplay loop controls />
</div>
