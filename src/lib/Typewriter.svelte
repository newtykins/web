<script lang="ts">
    export let interval = 40;

    import Typewriter from 'svelte-typewriter';
</script>

<Typewriter cursor={false} element="span" {interval}>
    <slot />
</Typewriter>
