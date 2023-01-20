<script lang="ts">
    type Mode = 'concurrent' | 'cascade' | 'loop' | 'loopOnce' | 'loopRandom' | 'scramble';
    export let interval = 40, mode: Mode = 'concurrent';

    import Typewriter from 'svelte-typewriter';
</script>

<Typewriter cursor={false} element="span" mode={mode} {interval}>
    <slot />
</Typewriter>
