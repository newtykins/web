<script lang="ts">
    import type { IconProp } from '@fortawesome/fontawesome-svg-core';
    import Icon from 'svelte-fa';
    import { goto } from '$app/navigation';

    export let icon: IconProp,
        iconSize: typeof Icon.prototype.$$prop_def.size = '1.05x', // todo: scale this depending on the tailwind viewport
        action: Function = () => null,
        classes: string = '',
        location: string = '',
        label: string;
</script>

<button on:click={() => (location ? goto(location) : action())} aria-label={label}>
    {#if classes != ''}
        <span class={classes}>
            <Icon {icon} size={iconSize} class="inline" />
        </span>
    {:else}
        <Icon {icon} size={iconSize} class="inline" />
    {/if}
</button>
